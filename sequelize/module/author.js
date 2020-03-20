const Sequelize = require('sequelize');
const sqz = require('../sequelize');
const faker = require('faker');

const Movie = require('./movie');
class Author extends Sequelize.Model {}
const times = require("lodash.times");
const random = require("lodash.random");


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

// Author.belongsTo(Movie);
// Movie.hasMany(Author);


Author.sync({force:true}).then(()=>{
    Author.bulkCreate(times(20, () =>({
        
        name: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        movie: `${faker.name.title()}`,
        IdMovie: random(1, 100)
    })))
})

module.exports = {Author}
