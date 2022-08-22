const mongoose = require('mongoose');

const publisherScema = new mongoose.Schema( {
    name: String,
    headQuarter: String,
}, { timestamps: true });


module.exports = mongoose.model('Publishers', publisherScema)
