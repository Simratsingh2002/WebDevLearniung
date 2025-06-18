const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const session = require('express-session');

const app = express();

// Middleware
app.use(express.json());
app.use(session({
  secret: 'your-session-secret-change-this',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// LinkedIn OAuth Configuration
const LINKEDIN_CONFIG = {
  clientId: process.env.LINKEDIN_CLIENT_ID ,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET ,
  redirectUri: process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:3000/auth/linkedin/callback',
  scope: 'openid profile email', // Basic profile and email
  authUrl: 'https://www.linkedin.com/oauth/v2/authorization',
  tokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
  apiUrl: 'https://api.linkedin.com/v2'
};

// Generate random state for CSRF protection
// Generate random state for CSRF protection
function generateState() {
  return crypto.randomBytes(16).toString('hex');
}

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>LinkedIn OAuth Demo</h1>
    <a href="/auth/linkedin">Login with LinkedIn</a>
    ${req.session.user ? `
      <h2>Welcome, ${req.session.user.firstName}!</h2>
      <p>Email: ${req.session.user.email}</p>
      <a href="/profile">View Full Profile</a>
      <a href="/logout">Logout</a>
    ` : ''}
  `);
});

// Step 1: Redirect to LinkedIn for authorization
app.get('/auth/linkedin', (req, res) => {
  const state = generateState();
  req.session.oauthState = state;

  const authUrl = new URL(LINKEDIN_CONFIG.authUrl);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('client_id', LINKEDIN_CONFIG.clientId);
  authUrl.searchParams.append('redirect_uri', LINKEDIN_CONFIG.redirectUri);
  authUrl.searchParams.append('scope', LINKEDIN_CONFIG.scope);
  authUrl.searchParams.append('state', state);

  console.log('Redirecting to LinkedIn:', authUrl.toString());
  res.redirect(authUrl.toString());
});

// Step 2: Handle LinkedIn callback
app.get('/auth/linkedin/callback', async (req, res) => {
  const { code, state, error } = req.query;

  // Check for errors
  if (error) {
    console.error('LinkedIn OAuth error:', error);
    return res.status(400).send(`OAuth Error: ${error}`);
  }

  // Verify state parameter (CSRF protection)
  if (!state || state !== req.session.oauthState) {
    console.error('Invalid state parameter');
    return res.status(400).send('Invalid state parameter');
  }

  // Clear the state from session
  delete req.session.oauthState;

  if (!code) {
    return res.status(400).send('Authorization code not received');
  }

  try {
    // Step 3: Exchange code for access token
    const tokenResponse = await axios.post(LINKEDIN_CONFIG.tokenUrl, null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        client_id: LINKEDIN_CONFIG.clientId,
        client_secret: LINKEDIN_CONFIG.clientSecret,
        redirect_uri: LINKEDIN_CONFIG.redirectUri
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, expires_in } = tokenResponse.data;
    console.log('Access token received:', access_token.substring(0, 20) + '...');

    // Step 4: Use access token to get user profile via OpenID Connect userinfo endpoint
    console.log('Fetching user info from LinkedIn userinfo endpoint...');
    
    const userinfoResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    });

    const userInfo = userinfoResponse.data;
    console.log('User info received:', JSON.stringify(userInfo, null, 2));

    // Store user data in session
    req.session.user = {
      id: userInfo.sub,
      firstName: userInfo.given_name || userInfo.name?.split(' ')[0] || 'N/A',
      lastName: userInfo.family_name || userInfo.name?.split(' ').slice(1).join(' ') || 'N/A',
      email: userInfo.email || 'Not available',
      profilePicture: userInfo.picture || null,
      name: userInfo.name,
      locale: userInfo.locale
    };

    req.session.accessToken = access_token;
    req.session.tokenExpires = Date.now() + (expires_in * 1000);

    console.log('User authenticated:', req.session.user);
    res.redirect('/');

  } catch (error) {
    console.error('Error during LinkedIn OAuth:', error.response?.data || error.message);
    res.status(500).send('Authentication failed');
  }
});

// Protected route - view full profile
app.get('/profile', async (req, res) => {
  if (!req.session.user || !req.session.accessToken) {
    return res.redirect('/auth/linkedin');
  }

  // Check if token is expired
  if (Date.now() > req.session.tokenExpires) {
    delete req.session.user;
    delete req.session.accessToken;
    return res.redirect('/auth/linkedin');
  }

  try {
    // Make additional API calls with the access token
    const connectionsResponse = await axios.get(`${LINKEDIN_CONFIG.apiUrl}/people/~/connections`, {
      headers: {
        'Authorization': `Bearer ${req.session.accessToken}`,
        'Content-Type': 'application/json'
      }
    }).catch(err => {
      console.log('Connections API call failed (might need additional permissions)');
      return { data: { _total: 'N/A' } };
    });

    res.json({
      user: req.session.user,
      connections: connectionsResponse.data._total,
      tokenExpires: new Date(req.session.tokenExpires).toISOString()
    });

  } catch (error) {
    console.error('Error fetching profile:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
});

// API endpoint to make authenticated requests
app.get('/api/linkedin/:endpoint', async (req, res) => {
  if (!req.session.accessToken) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (Date.now() > req.session.tokenExpires) {
    return res.status(401).json({ error: 'Token expired' });
  }

  try {
    const response = await axios.get(`${LINKEDIN_CONFIG.apiUrl}/${req.params.endpoint}`, {
      headers: {
        'Authorization': `Bearer ${req.session.accessToken}`,
        'Content-Type': 'application/json'
      },
      params: req.query
    });

    res.json(response.data);
  } catch (error) {
    console.error('LinkedIn API error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || 'API request failed'
    });
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destruction error:', err);
    }
    res.redirect('/');
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).send('Internal server error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Make sure to set your LinkedIn app credentials in environment variables:');
  console.log('LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_REDIRECT_URI');
});

module.exports = app;