import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json('Hello');
});

app.listen(8080, () => {
  console.log('The server is listening to port 8080');
});
