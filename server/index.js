const express = require('express');
const hibpProxy = require('./hibpProxy');
const app = express();
app.use(express.json()); // CRUCIAL!
app.use('/api', hibpProxy);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));