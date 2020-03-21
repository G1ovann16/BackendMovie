const Sequelize = require('sequelize');


const sqz = new Sequelize({
    dialect: 'sqlite',
    storage: './sequelize/basedata/dataBase.sqlite'
});
sqz.authenticate()
    .then(()=> console.log('Ready DataBAse'))
    .catch(err=> console.log(err));
module.exports = sqz;    