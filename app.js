const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/sw.js', function (req, res) {
  res.set('Cross-Origin-Resource-Policy', 'same-origin');
  res.sendFile(path.join(__dirname + '/sw.js'));
});

app.use('/', function(req, res) {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
