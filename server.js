const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

const albumController = require('./controllers/albums');

app.use(bodyParser.urlencoded({extended: false}));

//app.use('/albums', commieController);

app.get('/', (req, res) => {
    res.send('This is Albums app')
});


app.listen(3000, () => {
    console.log('listening on port 3000')
});