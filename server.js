const express = require('express');
const PORT = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');
//const Sequelize =  require('sequelize');

const { Movie } = require('./sequelize/module/movie');
const { Cine } = require('./sequelize/module/cine');
const { Author } = require('./sequelize/module/author');

//class Authores extends Sequelize.Model {}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Author.belongsTo

//movies

app.get('/movies', (req, res) => {
    if ((!req.query.id) && (!req.query.title)) {
        Movie.findAll().then( movies => {
            res.json((movies));
        });
    } else if(!req.query.title) {
        const id = req.query.id;
        Movie.findAll({ where: { id: id }}).then( movies => {
            res.json((movies));
        });
    }else{
        const title = req.query.title;
        Movie.findAll({ where: { title: title }}).then( movies => {
            res.json((movies));
        });
    }

});
//actor

app.get('/authors', (req, res) => {
// Authores.Model.findAll({ $and: [{"title" : {$regex : `.*${req.query.name}.*`, $options: 'i'}}]}).limit(60)
    if ((!req.query.id) && (!req.query.movie) && (!req.query.name) && (!req.query.lastName)) {
        Author.findAll().then( authors => {
            res.json((authors));
        });
    } else if((!req.query.movie)&& (!req.query.name) && (!req.query.lastName)) {
        const id = req.query.id;
        Author.findAll({ where: { id: id }}).then( authors => {
            res.json((authors));
        });
    }else if((!req.query.name) && (!req.query.lastName)){
        const movie = req.query.movie;
        Author.findAll({ where: { movie: movie }}).then( authors => {
            res.json((authors));
        });
    }
    else if(!req.query.lastName){
        const name = req.query.name;
        Author.findAll({ where: { name: name }}).then( authors => {
            res.json((authors));
        });
    } 
    else if(!req.query.name){
        const lastName = req.query.lastName;
        Author.findAll({ where: { lastName: lastName }}).then( authors => {
            res.json((authors));
        });
    } 
    else {
        const lastName = req.query.lastName;
        const name = req.query.name;
        Author.findAll({ where: { lastName: lastName, name: name }}).then( authors => {
            res.json((authors));
        });
    }  
});
//cine

app.get('/cines', (req, res) => {
     if((req.query.estreno)){
        const estreno = req.query.estreno;
        Cine.findAll({ where: { estreno: estreno }}).then( cines => {
            res.json((cines));
        });
        
    }
    else if ((!req.query.name) && (!req.query.provincia)) {
        Cine.findAll().then( cines => {
            res.json((cines));
        });
    } else if(!req.query.provincia) {
        const name = req.query.name;
        Cine.findAll({ where: { name: name }}).then( cines => {
            res.json((cines));
        });
    }else if(!req.query.name){
        const provincia = req.query.provincia;
        Cine.findAll({ where: { provincia: provincia }}).then( cines => {
            res.json((cines));
        });
    }
});

app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.blue);
});
