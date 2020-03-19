const Sequelize = require('sequelize');
const sqz = require('./sequelize');

class Movie extends Sequelize.Model {}

Movie.init(
    {
        ID: { type: Sequelize.INTEGER },
        title: { type: Sequelize.STRING }, 
        actor: { type: Sequelize.STRING},
        estreno: { type: Sequelize.BOOLEAN},
        cine: { type: Sequelize.INTEGER } 
    },
    {
        sqz,
        modelName: 'movie'
    }
);

Movie.sync({ force: true });

module.exports = {Movie}
