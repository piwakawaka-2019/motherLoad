const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')

const authRoutes = require('./routes/auth')
const resourceRoutes = require('./routes/posts')

// const stuff = require('./db/category')

const server = express()

server.use(cors('*'))
server.use(passport.initialize())

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/resources', resourceRoutes)
server.use('/api/auth', authRoutes)



module.exports = server
