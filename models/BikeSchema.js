var mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
  photo: String,
  date: String,
  city: String,
  serial: {type: String, unique: true},
  model: String,
  color: String,
  special: String
});

BikeSchema.index({ "$**": "text" });

module.exports = BikeSchema;