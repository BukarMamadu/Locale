const mongoose = require('mongoose');

const lgaSchema = mongoose.Schema({
    Name:String,
    info: {
        officialName:String,
        Chairman: String,
        Population: Number,
        Headquarters: String,
        Area: Number,
        Latitude: String,
        Longitude: String,
        Date_created: Date,
        }
});

module.exports = mongoose.model('Lga',lgaSchema);