const connection = require('../database/connection');

module.exports = {

    async listAll(req, res) {
        const teams = await connection('team').select('*');

        console.log(teams);
        
    
        return res.json(teams);
    },

    async create(req, res) {        
        const {name, city, country} = req.body;

        const [id] = await connection('team').insert({
            name,
            city,
            country
        })
        
        return res.json({id});
    }
}