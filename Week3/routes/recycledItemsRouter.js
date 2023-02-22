const express = require('express')
const recycledItemsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
//list of recyclable items
let recycledItems = [
    {name: "Beer Bottles",description: "Glass", recyclable:true, ppu: "7.10", _id: uuidv4()},
    {name: "Water Bottle", description: "Plastic", recyclable: true, ppu: "1.25", _id: uuidv4()},
    {name: "Boxes", description: "Cardboard", recyclable: true, ppu: "3.00", _id: uuidv4()},
    {name: "Newspaper", description: "Paper", recyclable: true, ppu: "1.50"},
]
//GET http://localhost:3000/recycled-items
recycledItemsRouter.get('/', (req, res) => {
    res.send(recycledItems)
})

//GET http://localhost:3000/non-recyclables/_id    Single item by _id
recycledItemsRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleRecItem = recycledItems.find(item => item._id === itemId)

    res.send(singleRecItem)
})
//new item to POST http://localhost:3000/recycled-items
recycledItemsRouter.post('/', (req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    recycledItems.push(newItem)
    res.send(`Added ${newItem.name} to database!`)
})

recycledItemsRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleRecIndex = recycledItems.findIndex(item => item._id === itemId)
    recycledItems.splice(singleRecIndex, 1)

    res.send('Resource successfully deleted!')
})

recycledItemsRouter.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleRecIndex = recycledItems.findIndex(item => item._id === itemId)
    const updatedRecItem = Object.assign(recycledItems[singleRecIndex], req.body)

    res.send(`Resource successfully updated ${updatedRecItem}`)
})
////exporting router
module.exports = recycledItemsRouter