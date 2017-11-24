const { mongoose, db } = require('../database');
city = db.model('City', {name: String});

module.exports = city;
