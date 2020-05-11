
exports.up = function(knex) {
    return knex.schema.createTable('player', function(table){
        table.string('id').primary();      
        table.string('name').notNullable();
        table.date('nascimento');
        table.string('country').notNullable();
        table.string('bio');

        table.string('team_id').notNullable();

        table.foreign('team_id').references('id').inTable('team');

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('player');
  };
  