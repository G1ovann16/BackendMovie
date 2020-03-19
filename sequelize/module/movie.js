const Sequelize = require('sequelize');

const sqz = require('../sequelize');

class Movie extends Sequelize.Model {}

Movie.init(
    {

        title: { type: Sequelize.STRING }, 
        author: { type: Sequelize.STRING},
        estreno: { type: Sequelize.BOOLEAN},
        cine: { type: Sequelize.INTEGER } 
    },
    {
        sequelize: sqz,
       modelName: 'movie'
    }
);

Movie.sync({force:true}).then(()=>{
    return Movie.create({
        title: 'Soy Leyend',
        author: 'Will Smitch',
        estreno: 'false',
        cine: '01'
    });
});


module.exports = {Movie}
