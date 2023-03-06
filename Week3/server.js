const express = require('express')
const morgan = require('morgan')

//Here you require both routers
const recycledItemsRouter = require('./routes/recycledItemsRouter')
const nonRecyclableItemsRouter = require('./routes/nonRecycleableRouter')


const app = express()
const PORT = 9000

//Middleware 
app.use(express.json())
app.use(morgan('dev'))

//GET http://localhost:3000/recycled-items
app.use('/recycled-items', recycledItemsRouter)
//GET http://localhost:3000/non-recyclables
app.use('/non-recyclables', nonRecyclableItemsRouter)


app.listen(PORT, () => {

})