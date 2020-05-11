const express = require('express');

const routes = express.Router();

const TeamController = require('./controllers/TeamController');
const PlayerController = require('./controllers/PlayerController');

routes.get('/teams', TeamController.listAll)

routes.get('/players', PlayerController.listAll)
routes.get('/players/:id', PlayerController.findOne)
routes.delete('/players/:id', PlayerController.delete)
routes.put('/players/:id', PlayerController.update)
routes.post('/players', PlayerController.create)



module.exports = routes;