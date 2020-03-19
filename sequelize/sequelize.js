const Sequelize = require('sequelize');


const sqz = new Sequelize({
    dialect: 'sqlite',
    // La ruta cuenta desde el archivo de ejecución, en este caso es server.js
    storage: './sequelize/basedata/dataBase.db'
});

sqz.authenticate()
    .then(()=> console.log('Ready DataBAse'))
    .catch(err=> console.log(err));

// Si importas con { } tienes que exportas con { } o viceversa
module.exports = sqz;    