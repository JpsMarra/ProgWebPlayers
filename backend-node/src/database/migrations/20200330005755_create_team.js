
exports.up = function(knex) {
    return knex.schema.createTable('team', function(table){
        table.increments();      
        table.string('team_name').notNullable();
        table.string('team_city').notNullable();
        table.decimal('team_country').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('team');
  };
  