const express = require('express');
const PORT = 5000;
const colors = require('colors');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Consult');
});
app.get('/cine', (req, res) => {
    res.send('Cines');
});


app.listen(PORT, () => {
    console.log(`Port inicialized on: ${PORT}`.red);
});