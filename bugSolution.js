const http = require('http');
const portfinder = require('portfinder');

async function startServer() {
  const port = await portfinder.getPortPromise(); // Find an available port

  const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();