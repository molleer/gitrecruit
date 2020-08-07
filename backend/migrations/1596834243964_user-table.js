/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('user', {
    id: 'id',
    username: {type: 'string', notNull: true, unique: true},
    email: {type: 'string', notNull: true, unique: true},
  });
};

exports.down = (pgm) => {};
