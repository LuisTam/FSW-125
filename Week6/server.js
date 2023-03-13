const express = require('express')
const morgan = require('morgan')
//requires itemRouter
const itemsRouter = require('./routes/itemsRouter')

const app = express()
const PORT = 3000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//GET http://localhost:3000/items
app.use('/items', itemsRouter)

app.listen(PORT, () => {

})
