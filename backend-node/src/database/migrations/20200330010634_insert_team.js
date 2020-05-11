
exports.up = function(knex) {
  return knex('team').insert([
    {
        team_name: 'Goiás',
        team_city: 'Goiânia',
        team_country: 'Brasil'
    },
    {
        team_name: 'Barcelona',
        team_city: 'Barcelona',
        team_country: 'Espanha'        
    },
    {
        team_name: 'Juventus',
        team_city: 'Turim',
        team_country: 'Itália'
    },
    {
        team_name: 'Palmeiras',
        team_city: 'São Paulo',
        team_country: 'Brasil'
    },
    {
        team_name: 'Chelsea',
        team_city: 'Londres',
        team_country: 'Inglaterra'
    }

  ])
};

exports.down = function(knex) {
  
};
