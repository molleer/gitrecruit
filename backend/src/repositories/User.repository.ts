import {QueryFunction} from '../setup/db.setup';
import {User} from '../models/User';

export const findUserByEmail = (
  query: QueryFunction,
  email: string
): Promise<User> =>
  query('SELECT * FROM "user" WHERE email=$1', [email], (res) =>
    res.rowCount > 0 ? res.rows[0] : null
  );

export const createUser = (query: QueryFunction, user: User): Promise<string> =>
  query(
    'INSERT INTO "user" (username, email) VALUES ($1, $2) RETURNING id',
    [user.username, user.email],
    (res) => res.rows[0]
  );
