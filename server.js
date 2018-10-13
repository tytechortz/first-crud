const express = require('express');
const app     = express();

const commieController = require('./controllers/fruits');



app.use('/commies', commieController);

app.get('/', (req, res) => {
    res.send('This is Commie app')
});


app.listen(3000, () => {
    console.log('listening on port 3000')
});