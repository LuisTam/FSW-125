const express = require('express');
const app = express();


const recycledItemsRouter = require('./routes/recycledItemsRouter')
const nonRecyclableItemsRouter = require('./routes/nonRecycleableRouter')

const PORT = 3000;

app.use(express.json())

app.use('/recycled-items', recycledItemsRouter)

app.use('/non-recyclables', nonRecyclableItemsRouter)


app.listen(PORT, () => {

})