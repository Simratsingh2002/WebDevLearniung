const express = require('express');
const fetch = require('node-fetch');    // npm install node-fetch@2
const fs = require('fs');

const app = express();
const PORT = 3000;

// ←— Replace these with your real token & URN:
const ACCESS_TOKEN = 'AQVYmwtzXngxMoToXsqd0JcwRb7Xr4wdzIhU7YEKQPCTRaC5Lhvfr2J71CySZvF5QR60g7bLq6vp2cF8_1voI7-NdOpmwf0Fh6UyC0xDO_udECyXmhGh_Dryrg-oLFewIyvB-gzV0MbDhABmPZjhP7THHBOzYl-o_dW_xUrGp0beq0H00m3GvI0P9EDfNw-_kBc6P9p2ManaLfnzj8WG1su1O1Es17xg44hSAu_LJ_fqT0aJCQywwrWu1fQpHaztOviNSB01tZ-aAHC3u1SWqTYN9ay_jAYGCSDRU0syFBCl2svL91otjadtelVwWynvXuKEjXPSkDb3ZVwPoMS5jUXwlv_XZw';
const PERSON_URN = 'urn:li:person:QMphCyojyg';

app.get('/shareImage', async (req, res) => {
    try {
      // 1) Register an upload session
      const registerRes = await fetch(
        'https://api.linkedin.com/v2/assets?action=registerUpload',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0'
          },
          body: JSON.stringify({
            registerUploadRequest: {
              owner: PERSON_URN,
              recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
              serviceRelationships: [{
                relationshipType: 'OWNER',
                identifier: 'urn:li:userGeneratedContent'
              }]
            }
          })
        }
      );
      if (!registerRes.ok) throw new Error(await registerRes.text());
      const registerData = await registerRes.json();
  
      // ←— Use bracket notation here to access that long key
      const mech = registerData.value.uploadMechanism[
        'com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'
      ];
      const uploadUrl = mech.uploadUrl;     // URL to PUT your bytes
      const asset     = registerData.value.asset; // e.g. urn:li:digitalmediaAsset:XYZ
  
      // 2) Upload the image bytes
      // TODO: replace './my-photo.jpg' with your local path (or read from a URL into a buffer)
      const imageBuffer = fs.readFileSync('xyz.png');
      const uploadRes = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/octet-stream'
        },
        body: imageBuffer
      });
      if (!uploadRes.ok) throw new Error(await uploadRes.text());
  
      // 3) Create the actual post, referencing that uploaded asset
      // TODO: change the text below to your desired caption
      const caption = 'Checkout this ride!';
  
      const ugcBody = {
        author: PERSON_URN,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: { text: caption },
            shareMediaCategory: 'IMAGE',
            media: [{
              status: 'READY',
              description: { text: 'My Test Image' }, // optional alt-text
              media: asset,                           // your uploaded asset URN
              title: { text: 'Ride Photo' }           // optional title
            }]
          }
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
      };
  
      const postRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0'
        },
        body: JSON.stringify(ugcBody)
      });
  
      const postText = await postRes.text();
      res.status(postRes.status).send(postText);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  // Add this route below your /shareImage handler:
  app.get('/analytics', async (req, res) => {
    try {
      // 1) Fetch last 5 shares (posts) by you
      const params = new URLSearchParams({
        q: 'owners',
        owners: `List(${PERSON_URN})`,
        count: '5',
        sortBy: 'LAST_MODIFIED'
      });
      const sharesUrl = `https://api.linkedin.com/v2/shares?${params.toString()}`;
      const sharesRes = await fetch(sharesUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'X-Restli-Protocol-Version': '2.0.0'
        }
      });
      if (!sharesRes.ok) {
        const err = await sharesRes.text();
        console.error('Shares fetch error:', sharesUrl, err);
        throw new Error(err);
      }
      const { elements } = await sharesRes.json();
  
      // 2) For each share, fetch social metrics
      const analytics = await Promise.all(
        elements.map(async (share) => {
          const shareUrn = share.activity.replace('activity', 'share');
          // Some responses use share.id directly; fallback if needed:
          const urn = share.id || shareUrn;
          const encodedUrn = encodeURIComponent(urn);
          const socialUrl = `https://api.linkedin.com/v2/socialActions/${encodedUrn}?fields=commentCount,shareCount`;
  
          const socialRes = await fetch(socialUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${ACCESS_TOKEN}`,
              'X-Restli-Protocol-Version': '2.0.0'
            }
          });
          if (!socialRes.ok) {
            const err = await socialRes.text();
            console.error('Social fetch error:', socialUrl, err);
            throw new Error(err);
          }
          const { commentCount, shareCount } = await socialRes.json();
  
          return {
            urn,
            commentCount,
            repostCount: shareCount
          };
        })
      );
  
      // 3) Respond with metrics
      res.json(analytics);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`▶ http://localhost:${PORT}/shareImage`);
  });

// // server.js
// const express = require('express');
// const fetch   = require('node-fetch');   // npm install node-fetch@2
// const fs      = require('fs');
// const path    = require('path');

// const app  = express();
// const PORT = 3000;

// // ←— TODO: Replace with your real token & URN:
// const ACCESS_TOKEN = 'AQVYmwtzXngxMoToXsqd0JcwRb7Xr4wdzIhU7YEKQPCTRaC5Lhvfr2J71CySZvF5QR60g7bLq6vp2cF8_1voI7-NdOpmwf0Fh6UyC0xDO_udECyXmhGh_Dryrg-oLFewIyvB-gzV0MbDhABmPZjhP7THHBOzYl-o_dW_xUrGp0beq0H00m3GvI0P9EDfNw-_kBc6P9p2ManaLfnzj8WG1su1O1Es17xg44hSAu_LJ_fqT0aJCQywwrWu1fQpHaztOviNSB01tZ-aAHC3u1SWqTYN9ay_jAYGCSDRU0syFBCl2svL91otjadtelVwWynvXuKEjXPSkDb3ZVwPoMS5jUXwlv_XZw';
// const PERSON_URN = 'urn:li:person:QMphCyojyg';

// // common headers for LinkedIn API
// const LI_HEADERS = {
//   Authorization: `Bearer ${ACCESS_TOKEN}`,
//   'X-Restli-Protocol-Version': '2.0.0',
// };

// // ------------------------------------------------------------------
// // 1) POST AN IMAGE + CAPTION AS UGC
// // ------------------------------------------------------------------
// app.get('/shareImage', async (req, res) => {
//   try {
//     const { caption, imageUrl, fileName } = req.query;
//     if (!caption) {
//       return res.status(400).send('Missing required "caption"');
//     }
//     if (!imageUrl && !fileName) {
//       return res
//         .status(400)
//         .send('Provide either "imageUrl" or "fileName"');
//     }

//     // load image into buffer
//     let imageBuffer;
//     if (imageUrl) {
//       const imgRes = await fetch(imageUrl);
//       if (!imgRes.ok) throw new Error(`Failed fetching image URL: ${imgRes.status}`);
//       imageBuffer = await imgRes.buffer();
//     } else {
//       imageBuffer = fs.readFileSync(path.resolve(fileName));
//     }

//     // 1a) register upload
//     const registerRes = await fetch(
//       'https://api.linkedin.com/v2/assets?action=registerUpload',
//       {
//         method: 'POST',
//         headers: {
//           ...LI_HEADERS,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           registerUploadRequest: {
//             owner: PERSON_URN,
//             recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
//             serviceRelationships: [{
//               relationshipType: 'OWNER',
//               identifier: 'urn:li:userGeneratedContent',
//             }],
//           },
//         }),
//       }
//     );
//     if (!registerRes.ok) {
//       throw new Error(`Register upload failed: ${await registerRes.text()}`);
//     }
//     const { value } = await registerRes.json();
//     const mech = value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'];
//     const uploadUrl = mech.uploadUrl;
//     const asset     = value.asset;

//     // 1b) upload bytes
//     const uploadRes = await fetch(uploadUrl, {
//       method: 'PUT',
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//         'Content-Type': 'application/octet-stream',
//       },
//       body: imageBuffer,
//     });
//     if (!uploadRes.ok) {
//       throw new Error(`Image upload failed: ${await uploadRes.text()}`);
//     }

//     // 1c) create UGC post
//     const ugcBody = {
//       author: PERSON_URN,
//       lifecycleState: 'PUBLISHED',
//       specificContent: {
//         'com.linkedin.ugc.ShareContent': {
//           shareCommentary: { text: caption },
//           shareMediaCategory: 'IMAGE',
//           media: [{
//             status: 'READY',
//             description: { text: '...' }, // optional alt-text
//             media: asset,                 // uploaded asset URN
//             title: { text: '...' }        // optional title
//           }]
//         }
//       },
//       visibility: {
//         'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
//       }
//     };

//     const postRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
//       method: 'POST',
//       headers: {
//         ...LI_HEADERS,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(ugcBody),
//     });
//     const postData = await postRes.json();
//     if (!postRes.ok) {
//       throw new Error(`UGC post failed: ${JSON.stringify(postData)}`);
//     }

//     res.json(postData);

//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

// // ------------------------------------------------------------------
// // 2) GET ANALYTICS FOR LAST 5 POSTS
// // ------------------------------------------------------------------
// app.get('/analytics', async (req, res) => {
//   try {
//     // 2a) fetch your last 5 shares
//     const sharesRes = await fetch(
//       `https://api.linkedin.com/v2/shares?q=owners&owners=${encodeURIComponent(PERSON_URN)}&sortBy=LAST_MODIFIED&count=5`,
//       { headers: LI_HEADERS }
//     );
//     if (!sharesRes.ok) {
//       throw new Error(`Failed retrieving shares: ${await sharesRes.text()}`);
//     }
//     const sharesData = await sharesRes.json();
//     const elements   = sharesData.elements || [];

//     // 2b) for each share, fetch social action counts
//     const results = await Promise.all(elements.map(async share => {
//       // share.id is like "urn:li:share:12345"
//       const urn = share.id;

//       // query the socialActions endpoint
//       const saRes = await fetch(
//         `https://api.linkedin.com/v2/socialActions/${encodeURIComponent(urn)}`,
//         { headers: LI_HEADERS }
//       );
//       if (!saRes.ok) {
//         throw new Error(`socialActions failed for ${urn}: ${await saRes.text()}`);
//       }
//       const sa = await saRes.json();

//       // LinkedIn returns summaries under specific keys:
//       //   sa['reactionSummaries']    → array of { count, reactionType }
//       //   sa['commentSummary']       → { totalCount }
//       //   sa['shareSummary']         → { shareCount, repostCount }
//       const likes    = (sa.reactionSummaries || []).reduce((sum, r) => sum + (r.count||0), 0);
//       const comments = sa.commentSummary?.totalCount || 0;
//       const shares   = sa.shareSummary?.shareCount    || 0;
//       const reposts  = sa.shareSummary?.repostCount   || 0;

//       return {
//         postUrn: urn,
//         createdTime: share.created.time,
//         likes,
//         comments,
//         shares,
//         reposts
//       };
//     }));

//     res.json(results);

//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`▶ http://localhost:${PORT}/shareImage`);
//   console.log(`▶ http://localhost:${PORT}/analytics`);
// });
