const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId')
module.exports = {

    async listAll(req, res) {
        const jogadores = await connection('player')
            .join('team', 'team.id', '=', 'player.team_id')
            .select([
                'player.id',
                'player.name',
                'player.country',
                'team.team_name',
                'team.team_country'
            ]);
    
        console.log(jogadores);
        

        return res.json(jogadores);
    },

    async findOne(req, res) {
        const { id } = req.params;

        const jogador = await connection('player')
                                .join('team', 'team.id', '=', 'player.team_id')
                                .select([
                                    'player.id',
                                    'player.name',
                                    'player.country',
                                    'player.nascimento',
                                    'player.bio',
                                    'team.team_name',
                                    'team.team_country'
                                ])
                                .where('player.id', id)
                                .first()
                                
                
        return res.json(jogador)

    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('player').where('id', id).delete();

        return res.status(204).send();
    },

    async create(req, res) {        
        const {name, country, bio, nascimento, team_id} = req.body;

        const id = generateUniqueId();
        await connection('player').insert({
            id,
            name,
            country,
            bio,
            nascimento,
            team_id,
        })
        
        return res.json({id});
    },

    async update(req, res) {
        
        const { id } = req.params;
        const {name, country, bio, nascimento, team_id} = req.body;

        
        await connection('player')
                .update({
                    name,
                    country,
                    bio,
                    nascimento,
                    team_id
                })
                .where('id', id)

        return res.status(200).send();

    }
}