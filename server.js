require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const postsController = require('./controllers/postsController')
// const Post = require('./models/Post')


const PORT = process.env.PORT

const app = express()
app.use(logger('dev'));
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/posts', postsController)

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})