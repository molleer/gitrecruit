import express from 'express';
import pg from 'pg';

const app = express();

const pool = new pg.Pool({
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
});

const to = <T>(promise: Promise<T>) =>
  promise.then((res) => [null, res]).catch((err) => [err]);

app.get('/', async (req, res) => {
  const [err, cats] = await to(pool.query('SELECT * FROM CAT'));
  err ? res.status(500).json(err) : res.status(200).json(cats.rows);
});

app.listen(8080, () => {
  console.log('The server is listening to port 8080');
});
