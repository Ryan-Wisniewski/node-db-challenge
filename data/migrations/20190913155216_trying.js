
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name')
          .notNullable()
      tbl.string('discription', 255)
      tbl.boolean('completed')
          .default(false)
          .toString()
    })
  
    .createTable('resource', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('description')
    })
  
    .createTable('task', tbl => {
      tbl.increments()
      tbl.string('description').notNullable()
      tbl.string('notes')
      tbl.boolean('completed')
          .default(false)
          .toString()
  
      tbl
          .integer('task_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE') // if the PK record is deleted
          .onUpdate('CASCADE'); // if the PK value updates
      })
  
      .createTable('project_resources', tbl => {
          tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE') // if the PK record is deleted
            .onUpdate('CASCADE'); // if the PK value updates
          tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resource')
            .onDelete('CASCADE') // if the PK record is deleted
            .onUpdate('CASCADE'); // if the PK value updates
    
          tbl.primary(['project_id', 'resource_id']);
        });
  };

  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};

