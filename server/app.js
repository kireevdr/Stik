const express = require('express')
const blockRoutes = require('./routes/blocks.routes')


const app = express()

app.use('/api/blocks', blockRoutes)

module.exports = app
