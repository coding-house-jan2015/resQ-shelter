'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true},
    pets: [{type: mongoose.Schema.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model('Client', clientSchema);
