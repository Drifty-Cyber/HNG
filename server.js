const app = require('./app');

const port = 8080;

const server = app.listen(port, () => {
  console.log(`App is running in ${port}`);
});
