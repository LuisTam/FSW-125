const express = require('express')
const itemsRouter = express.Router()
const { v4: uuidv4} = require('uuid')
//Fake data
let items = [
    {name: 'avocado', type: 'food', price: 20, _id: uuidv4()},
    {name: 'shirt', type: 'clothing', price: 40, _id: uuidv4()},
    {name: 'lego set', type: 'toy', price: 30, _id: uuidv4()},
    {name: 'hat', type: 'clothing', price: 15, _id: uuidv4()},
    {name: 'pasta', type: 'food', price: 10, _id: uuidv4()},
    {name: 'baseball', type: 'toy', price: 33, _id: uuidv4()},
    {name: 'lemons', type: 'food', price:8, _id: uuidv4()}

]
//GET request that filters if there is a query
itemsRouter.get('/', (req, res) => {
let filteredItems = items
if(req.query.type){
    filteredItems = filteredItems.filter(item => item.type == req.query.type)
}
res.send(filteredItems)
})


//Exports itemRouter
module.exports = itemsRouter