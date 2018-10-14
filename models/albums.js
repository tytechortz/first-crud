// this is the data, or model
const mongoose = require('mongoose');

const albums = [
    {
        name:'Thriller',
        artist: 'MJ',
        genre: 'Pop',
        year: 1984 
     },
     {
        name:'Rubber Soul',
        artist: 'Beatles',
        genre: 'Rock',
        year: 1965
     },
     {
        name:'Duke Live at Newport',
        artist: 'Duke Ellington',
        genre: 'Jazz',
        year: 1958 
     }
    ];

module.export = albums;

// const albumSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     artist: {type: String, required: true},
//     genre: {type: String, required: true},
//     year: Number,
// });

//module.exports = mongoose.model('Album', albumSchema);