const express = require('express');
const app = express();
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const emailRoutes = require('./emailRoutes');

const { createProxyMiddleware } = require('http-proxy-middleware');

const jwt = require('jsonwebtoken');
app.get('/logout', (req, res) => {
  return res.clearCookie('access_token').send('access token cleared');
});

app.get('/get-token', (req, res) => {
  try {
    const accessToken = req.cookies['access_token'];
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
  } catch (err) {
    return res.status(401).send('Unauthorized. Invalid Token');
  }
});

// Configuration du proxy pour PayGate
const paygateProxy = createProxyMiddleware('/paygate', {
  target: 'https://paygateglobal.com',
  changeOrigin: true,
  pathRewrite: {
    '^/paygate': '/api/v1/pay', // Utilisez la bonne URL de l'API PayGate ici
  },
});

app.use(paygateProxy);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/emails', emailRoutes); 

module.exports = app;
