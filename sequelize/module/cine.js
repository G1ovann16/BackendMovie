const Sequelize = require('sequelize');
const sqz = require('../sequelize');

class Cine extends Sequelize.Model {}

Cine.init(
    {
        provincia: { type: Sequelize.STRING }, 
        movie: { type: Sequelize.STRING},
        IdMovie: { type: Sequelize.INTEGER }
    },
    {
        sequelize: sqz,
        modelName: 'cine'
    }
);

Cine.sync({ force: true });

module.exports = {Cine}
