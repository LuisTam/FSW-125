const express = require('express')
const app = express()
//Requires todoRouter 
const todoRouter = require('./routes/todoRouter')

const PORT = 3000
//Middleware
app.use(express.json())
//http://localhost:3000/todos
app.use('/todos', todoRouter)

app.listen(PORT, () => {

})