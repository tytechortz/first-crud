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

app.get('/albums/new', (req, res) => {
    res.render('new.ejs');
});


//show route
// app.get('/albums/:index', (req, res) => {
//     res.send(albums[req.params.index]);
// });

app.get('/albums/:index', (req, res) => {
         res.render('show.ejs', { //second param must be an object
             album: albums[req.params.index] //there will be a variable inside the ejs 
             // file called album, its value is albums[req.params.index]
         });
});



app.get('/', (req, res) => {
    res.send('This is Albums app')
});




app.listen(3000, () => {
    console.log('listening on port 3000')
});