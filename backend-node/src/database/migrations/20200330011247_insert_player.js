const faker = require('faker')
const generateId = require('../../utils/generateUniqueId')
exports.up = function(knex) {
    return knex('player').insert([
      {
          id: generateId(),
          name: 'Lionel Messi',
          country: 'Argentina',
          bio: faker.lorem.paragraph(),
          team_id: 2
      },
      {
          id: generateId(),
          name: 'Léo Sena',
          country: 'Brasil',
          bio: faker.lorem.paragraph(),
          team_id: 1
      },
      {
          id: generateId(),
          name: 'Cristiano Ronaldo',
          country: 'Portugal',
          bio: faker.lorem.paragraph(),
          team_id: 3
      },
      {
          id: generateId(),
          name: 'Luiz Suarez',
          country: 'Uruguai',
          bio: faker.lorem.paragraph(),
          team_id: 2
      },
      {
          id: generateId(),
          name: 'Ngolo Kanté',
          country: 'França',
          bio: faker.lorem.paragraph(),
          team_id: 5
      },
      {
          id: generateId(),
          name: 'Rafael Moura',
          country: 'Brasil',
          bio: faker.lorem.paragraph(),
          team_id: 1
      },
      {
          id: generateId(),
          name: 'Marcos Rocha',
          country: 'Brasil',
          bio: faker.lorem.paragraph(),
          team_id: 4
      },
      {
          id: generateId(),
          name: 'Gustavo Gomez',
          country: 'Paraguai',
          bio: faker.lorem.paragraph(),
          team_id: 4
      },
    ])
  
};

exports.down = function(knex) {
  
};
