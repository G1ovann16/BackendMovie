const express = require('express');
const PORT = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');

const { Movie } = require('./sequelize/module/movie');
const { Cine } = require('./sequelize/module/cine');
const { Author } = require('./sequelize/module/author');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Consult')
});


app.get('/movies', (req, res) => {
    Movie.findAll().then((movie)=>{
        res.json(movie);
    });
});

// localhost:3000/movie?id=id
app.get('/movies', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where: { id: _id }}).then( movies => {
        res.json(movies);
    });
});

//actor
app.get('/authors', (req, res) => {
    Author.findAll().then((author)=>{
        res.json(author);
    });
});

app.get('/authors', (req, res) => {
    let _id = req.query.id
    Author.findAll({ where: { id: _id }}).then( author => {
        res.json(author);
    });
});

app.get('/cines', (req, res) => {
    Cine.findAll().then((cine)=>{
        res.json(cine);
    });
});

app.get('/cines', (req, res) => {
    let _id = req.query.id
    Cine.findAll({ where: { id: _id }}).then( cine => {
        res.json(cine);
    });
});


app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});