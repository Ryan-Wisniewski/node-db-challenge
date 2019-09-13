
exports.seed = function(knex) {
    return knex('resource').insert([
      { name: 'www.Google.com', description: 'the lifesaver'}, //1
      { name: 'Lambda School', description: 'also the lifesaver'}, //2
      { name: 'Documentation!', description: 'also the lifesaver'} //3
    ]);
};
