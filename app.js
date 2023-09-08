const express = require('express');
const dataRouter = require('./routes/dataRouter');

const app = express();

// Body Parser
app.use(express.json());

app.get('/api/v1/hello', (req, res, next) => {
  res.status(200).json({
    message: 'hello',
  });
});

// Mount the Router
app.use('/api/getData', dataRouter);

module.exports = app;
