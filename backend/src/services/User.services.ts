import {QueryFunction} from '../setup/db.setup';
import {User} from '../models/User';
import {findUserByEmail, createUser} from '../repositories/User.repository';

export const findOrCreateUser = (
  query: QueryFunction,
  user: User,
  next: Function
) => {
  findUserByEmail(query, user.email)
    .then((foundUser) => {
      if (foundUser) return next(null, foundUser);
      createUser(query, user)
        .then((id) => next(null, {...user, id}))
        .catch((err) => next(err, null));
    })
    .catch((err) => next(err, null));
};
