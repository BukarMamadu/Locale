const mongoose = require('mongoose');

const regionSchema = mongoose.Schema({
    Name:String,
    info: {
        officialName:String,
        Population: Number,
        Area: Number,
        Latitude: String,
        Longitude: String,
        Name_of_STATES: String,
        Number_of_STATES: Number,
        Number_of_LGAS: Number,
        Date_created: Date,
        }
});

module.exports = mongoose.model('Region',regionSchema);