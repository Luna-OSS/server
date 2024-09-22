const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy middleware options
const paperProxy = createProxyMiddleware({
  target: 'http://localhost:3101',
  changeOrigin: true,
});

const homebridgeProxy = createProxyMiddleware({
  target: 'http://localhost:8581',
  changeOrigin: true,
});

// Use the proxy middleware
app.use('/paper', paperProxy);
app.use('/homebridge', homebridgeProxy);

// Start the server
const PORT = 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Reverse proxy server is running on port ${PORT}`);
});
