const Sequelize = require('sequelize');
const sqz = require('./sequelize');

class Actor extends Sequelize.Model {}

Actor.init(
    {
        ID: { type: Sequelize.INTEGER },
        name: { type: Sequelize.STRING }, 
        lastName: { type: Sequelize.STRING},
        movie: { type: Sequelize.STRING}
    },
    {
        sqz,
        modelName: 'movie'
    }
);

Actor.sync({ force: true });

module.exports = {Actor}
