const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath;
  if (reqUrl.startsWith('/batch2/') || reqUrl.startsWith('/full/') || reqUrl.startsWith('/app/')) {
    filePath = path.join(__dirname, reqUrl);
  } else if (reqUrl === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    // Default fallback
    filePath = path.join(__dirname, reqUrl);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(__dirname, 'full', reqUrl);
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`====================================================`);
  console.log(`  Cisco NetAcad Practice Exam Server Running!`);
  console.log(`  Portal:     ${url}`);
  console.log(`  Full Exam:  ${url}/full/index.html (All 172 Items)`);
  console.log(`  Batch 1:    ${url}/app/index.html (Items 1-89)`);
  console.log(`  Batch 2:    ${url}/batch2/index.html (Items 90-174)`);
  console.log(`====================================================`);
});
