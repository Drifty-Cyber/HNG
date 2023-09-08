const express = require('express');
const dataRouter = require('./routes/dataRouter');

const app = express();

// Body Parser
app.use(express.json());

// Mount the Router
app.use('/api', dataRouter);

module.exports = app;
