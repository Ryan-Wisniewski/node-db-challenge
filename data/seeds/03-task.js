
exports.seed = function(knex) {
      return knex('task').insert([
        { description: 'enter search into google', notes: 'good to use', completed: false, task_id: 1 },
        { description: 'look through google', notes: 'still good to use', completed: false, task_id: 1 },
        { description: 'start coding', completed: false, task_id: 2 },
        { description: 'do stuff', completed: false, task_id: 2 },
        { description: 'cry because it probably no work', notes: 'but keep working', task_id: 3}
      ]);
};
