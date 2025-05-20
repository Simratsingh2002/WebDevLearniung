const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const CLIENT_ID = "78687wuop4ehwx";
const CLIENT_SECRET = "WPL_AP1.hy1nXjlt5ejbmQUP.OFBo/Q==";
const REDIRECT_URI = "http://localhost:3000/oauth/callback";

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/oauth/callback', async (req, res) => {
  const { code, state } = req.query;
  if (state !== 'abc123') {
    console.log("State mismatch error")
    return res.send('State mismatch error');
  }

  try {
    const tokenRes = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    res.send(`
      <h2>Access Token:</h2>
      <pre>${JSON.stringify(tokenRes.data, null, 2)}</pre>
    `);
  } catch (error) {
    res.send(`<h2>Error fetching token</h2><pre>${error}</pre>`);
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
