const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findResource,
  findTask,
  findById,
  insert,
  insertResource,
  insertTask,
  update,
  remove
};

function find() {
  return db('projects');
}

function findResource() {
  return db('resource');
}

function findTask() {
  return db('task');
}

function findById(id) {
  return db('projects').where({ id: Number(id) });
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function insertResource(resource) {
  return db('resource')
    .insert(resource)
    .then(ids => {
      return getById(ids[0]);
    });
}

function insertTask(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, post) {
  return db('projects')
    .where('id', Number(id))
    .update(post);
}

function remove(id) {
  return db('projects')
    .where('id', Number(id))
    .del();
}