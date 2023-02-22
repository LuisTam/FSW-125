const express = require('express')
const app = express()

//Here you require both routers
const recycledItemsRouter = require('./routes/recycledItemsRouter')
const nonRecyclableItemsRouter = require('./routes/nonRecycleableRouter')

const PORT = 3000
//Turns JSON into readable JS
app.use(express.json())
//GET http://localhost:3000/recycled-items
app.use('/recycled-items', recycledItemsRouter)
//GET http://localhost:3000/non-recyclables
app.use('/non-recyclables', nonRecyclableItemsRouter)


app.listen(PORT, () => {

})