const express = require('express');
const hibpProxy = require('./hibpProxy');
const contactApi = require('./contactApi');
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// API routes
app.use('/api', hibpProxy);
app.use('/api', contactApi);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));