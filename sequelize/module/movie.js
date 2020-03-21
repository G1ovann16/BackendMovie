const faker = require('faker');
const Sequelize = require('sequelize');

const sqz = require('../sequelize');
const Author = require('./author');
class Movie extends Sequelize.Model {}
const times = require("lodash.times");
const random = require("lodash.random");
let rand = Math.random()>=0.5;


// Movie.belongsTo(Author);
// Author.hasMany(Movie);


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
    Movie.bulkCreate(times(100, () =>({
        title: `${faker.lorem.sentence()}`,
        author: `${faker.name.findName()}`,
        estreno: rand,
        IdAuthor: random(1, 100),
        IdCine: random(1, 10)
    })))
})

module.exports = {Movie}
