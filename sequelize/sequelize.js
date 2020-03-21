const Sequelize = require('sequelize');


const sqz = new Sequelize({
    dialect: 'sqlite',
<<<<<<< HEAD
    storage: './sequelize/basedata/dataBase.sqlite'
});
sqz.authenticate()
    .then(()=> console.log('Ready DataBAse'))
    .catch(err=> console.log(err));
=======
    storage: '../basedata/dataBase.sqlite'
});

sqz.authenticate()
    .then(()=> console.log('Ready DataBAse'))
    .catch(err=> console.log(err));

>>>>>>> feature/modules
module.exports = sqz;    