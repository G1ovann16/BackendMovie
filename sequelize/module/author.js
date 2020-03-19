const Sequelize = require('sequelize');
const sqz = require('../sequelize');

class Author extends Sequelize.Model {}

Author.init(
    {
        name: { type: Sequelize.STRING }, 
        lastName: { type: Sequelize.STRING},
        movie: { type: Sequelize.STRING},
        IdMovie: { type: Sequelize.INTEGER }
    },
    {
        sequelize: sqz,
        modelName: 'author'
        
    }
);

Author.sync({ force: true });

module.exports = {Author}
