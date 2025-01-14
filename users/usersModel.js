const db = require('../database/dbConfig');

module.exports = {
  find,
  findBy,
  add,
  findById
}

function find() {
  return db('users').select('username', 'password', 'departments')
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
  .insert(user, 'id')
  .then(ids => {
    const [id] = ids;
    return findById(id)
  }) 
}

function findById(id) {
  return db('users')
  .where({ id })
  .first();
}