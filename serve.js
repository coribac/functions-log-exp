const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8081);
const HOST = '127.0.0.1';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  const urlPath = new URL(req.url, `http://${req.headers.host}`).pathname;
  
  if (urlPath === '/git-object') {
    const hash = new URL(req.url, `http://${req.headers.host}`).searchParams.get('hash');
    const folder = hash.substring(0, 2);
    const file = hash.substring(2);
    const objectPath = path.join(__dirname, '.git', 'objects', folder, file);
    try {
      const data = fs.readFileSync(objectPath);
      const decompressed = require('zlib').inflateSync(data);
      res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
      res.end(decompressed);
    } catch (e) {
      res.writeHead(500);
      res.end('Error: ' + e.message);
    }
    return;
  }

  let filePath = '.' + urlPath;
  if (filePath === './') filePath = './index.html';

  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + err.code);
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-store, must-revalidate' });
    res.end(content);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
