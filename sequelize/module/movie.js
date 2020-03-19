const express = require('express');
const PORT = 3000;
const colors = require('colors');
const app = express();
const morgan = require('morgan');
const faker = require('faker');

app.use(morgan('dev'));

let ID = 50;
let tittleMovie = '';
let actores = [];


app.get('/', (req, res) => {
    res.send('Consult')
});
for (let i = 0; i < ID; i++) {
    tittleMovie= faker.name;

app.get('/movie', (req, res) => {
    res.json({
        'ID': 'i',
        'tittleMovie': 'tittleMovie'
    });
});
}

app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});