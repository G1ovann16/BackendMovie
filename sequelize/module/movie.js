const Sequelize = require('sequelize');

const sqz = require('../sequelize');

class Movie extends Sequelize.Model {}

Movie.init(
    {
        //ID: { type: Sequelize.INTEGER }, el ID lo pone solo sequelize
        title: { type: Sequelize.STRING }, 
        actor: { type: Sequelize.STRING},
        estreno: { type: Sequelize.BOOLEAN},
        cine: { type: Sequelize.INTEGER } 
    },
    {
        // Esto solo se puede hacer con el nombre sequelize
        sequelize: sqz,
        modelName: 'movie'
    }
);

Movie.sync({ force: true });

module.exports = {Movie}
