/* eslint-disable arrow-parens */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('cat', {
    id: 'id',
    name: {type: 'string', notNull: true},
  });
};

exports.down = (pgm) => {};
