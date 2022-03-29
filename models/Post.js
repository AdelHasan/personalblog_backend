const mongoose = require('./../connection')

const postSchema = new mongoose.Schema({
  title: String,
  date: Date,
  imageLink: String,
  excerpt: String,
  categories: [String],
  postBody: String 
})

module.exports = mongoose.model('Post', postSchema)