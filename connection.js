const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/personalblog_backend")
// mongoose.connect("mongodb://localhost/vinyl-api")

module.exports = mongoose