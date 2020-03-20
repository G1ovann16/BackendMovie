const Sequelize = require('sequelize');
const sqz = require('../sequelize');
const faker = require('faker');

class Cine extends Sequelize.Model {}
const Movie = require('./movie');
const times = require("lodash.times");
const random = require("lodash.random");



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

Cine.sync({force:true}).then(()=>{
    Cine.bulkCreate(times(10, () =>({
        provincia: `${faker.name.title()}`,
        movie: `${faker.name.title()}`,
        IdMovie: random(1, 100)
    })))
})

module.exports = {Cine}
