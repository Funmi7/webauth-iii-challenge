
exports.up = function(knex) {
  return knex.schema.createTable('users', createTable => {
    createTable.increments();
    createTable.string('username', 128)
    .notNullable()
    .unique();
    createTable.string('password', 128)
    .notNullable();
    createTable.string('departments')
    .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
