const express = require('express')
const app = express()

const todoRouter = require('./routes/todoRouter')

const PORT = 3000

app.use(express.json())

app.use('/todos', todoRouter)

app.listen(PORT, () => {

})