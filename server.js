require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const postsController = require('./controllers/postsController')

const PORT = process.env.PORT

const app = express()
app.use(logger('dev'));
app.use(cors())

app.use('/posts', postsController)

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})