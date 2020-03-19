const express = require('express');
const PORT = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');

const { Movie } = require('./sequelize/module/movie');
// const { Cine } = require('./sequelize/module/cine');
// const { Actores } = require('./sequelize/module/actores');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Consult')
});

// localhost:3000/movie?id=id
app.get('/movie', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where: { id: _id }}).then( movies => {
        res.json(movies);
    });
});

app.get('/actores', (req, res) => {
    let _id = req.query.id
    Actores.findAll({ where: { id: _id }}).then( actor => {
        res.json(actor);
    });
});
app.get('/cine', (req, res) => {
    let _id = req.query.id
    Cine.findAll({ where: { id: _id }}).then( cine => {
        res.json(cine);
    });
});


app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});