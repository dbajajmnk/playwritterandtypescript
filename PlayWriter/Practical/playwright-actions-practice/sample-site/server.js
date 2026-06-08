const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = 5500;

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  const requestedPath = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const safePath = path.normalize(requestedPath).replace(/^\.\.(\/|\\|$)/, '');
  const filePath = path.join(root, safePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Sample testing website running at http://127.0.0.1:${port}`);
});
