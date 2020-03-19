const Sequelize = require('sequelize');
const sqz = require('../sequelize');

class Cine extends Sequelize.Model {}

Cine.init(
    {
        //ID: { type: Sequelize.INTEGER },
        provincia: { type: Sequelize.STRING }, 
        movie: { type: Sequelize.STRING}
    },
    {
        sequelize: sqz,
        modelName: 'movie'
    }
);

Cine.sync({ force: true });

module.exports = {Cine}
