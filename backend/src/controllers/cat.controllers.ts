import {to} from '../utils/utils';

export const handleGet = (query) => async (req, res) => {
  const [err, cats] = await to(query('SELECT * FROM CAT'));
  err ? res.status(500).json(err) : res.status(200).json(cats.rows);
};
