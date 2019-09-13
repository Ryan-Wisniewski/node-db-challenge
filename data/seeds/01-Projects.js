
exports.seed = function(knex, Promise) {
    // Inserts seed entries
    return knex('projects').insert([
      {name: 'Project1', discription: 'Wow look at this!!!', completed: false}, //1
      {name: 'Project2', discription: 'Wow look at this!!!', completed: false}, //2
      {name: 'Project3', discription: 'Wow look at this!!!', completed: false}, //3
    ]);
};
