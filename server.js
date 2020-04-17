const express = require('express')

const { db } = require('./db')
const todoRoute = require('./route/todo')
const todoOrderby = require('./route/order')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)
app.use('/orderby',todoOrderby)


db.sync()
  .then(() => {
    app.listen(process.env.PORT || 6565)
    console.log("server started");
  })
  .catch((err) => {
    console.error(err)
  })
