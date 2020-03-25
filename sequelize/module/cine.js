const Sequelize = require('sequelize');
const sqz = require('../sequelize');
const faker = require('faker');

class Cine extends Sequelize.Model {}
const {Movie} = require('./movie');
const times = require("lodash.times");
const random = require("lodash.random");





Cine.init(
    {
        name: { type: Sequelize.STRING},
        provincia: { type: Sequelize.STRING }, 
        movie: { type: Sequelize.STRING},
        estreno: { type: Sequelize.BOOLEAN},
        IdMovie: { type: Sequelize.INTEGER }
    },
    {
        sequelize: sqz,
        modelName: 'cine'
    }
);

Cine.sync({force:false}).then(()=>
{
    // Cine.bulkCreate(times(5, () =>({
    //     name: `${faker.name.jobTitle()}`,
    //     provincia: `${faker.name.title()}`,
    //     movie: `${faker.name.title()}`,
    //     IdMovie: random(1, 10)
    // })))
})

module.exports = {Cine}
