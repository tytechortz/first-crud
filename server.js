const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

const albumController = require('./controllers/albums');

app.use(bodyParser.urlencoded({extended: false}));

//app.use('/albums', commieController);


// Requiring model
const Albums = require('./models/albums');
     


//index route
app.get('/albums/', (req, res) => {
    res.send(albums);
});


//show route
// app.get('/albums/:index', (req, res) => {
//     res.send(albums[req.params.index]);
// });

app.get('/albums/:index', (req, res) => {
         res.render('show.ejs');
});



app.get('/', (req, res) => {
    res.send('This is Albums app')
});




app.listen(3000, () => {
    console.log('listening on port 3000')
});