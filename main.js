const express = require('express');
const sqz = require('sequelize');
const PORT = 3000;
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

const db = require('./sequelize/basedata/dataBase');
const app = express();

app.get('/', (req, res) => {
    res.send('Consult')
});

app.get('/movie', (req, res) => {
    res.json({
        'ID': 'i',
        'tittleMovie': 'tittleMovie'
    });
});
app.get('/actores', (req, res) => {
    res.json({
        'ID': 'i',
        'tittleMovie': 'tittleMovie'
    });
});
app.get('/cine', (req, res) => {
    res.json({
        'ID': 'i',
        'tittleMovie': 'tittleMovie'
    });
});



app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});