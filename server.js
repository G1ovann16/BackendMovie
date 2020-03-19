const express = require('express');
const PORT = 3000;
const sqz = require('sequelize');
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { Movie } = require('./sequelize/module/movie');
const { Cine } = require('./sequelize/module/cine');
const { Actores } = require('./sequelize/module/actores');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./sequelize/basedata/dataBase.sqlite');

app.get('/', (req, res) => {
    res.send('Consult')
});

app.get('/movie', (req, res) => {

});

app.get('/actores', (req, res) => {
    res.json({
    });
});
app.get('/cine', (req, res) => {
    res.json({
    });
});



app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});