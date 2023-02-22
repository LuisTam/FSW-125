const express = require('express')
const nonRecyclableItemsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
//list of non recyclable items
let nonRecyclabes = [
    {name: "Batteries", description: "all kind", recyclable: false, ppu: "10.00", _id: uuidv4()},
    {name: "Tires", description: "rubber", recyclable: false, ppu: "50.00", _id: uuidv4()},
    {name: "Plastic Bag", description: "Plastic", recyclable: false, ppu: ".10", _id: uuidv4()},
    {name: "Appliances", description: "all kind", recyclable: false, ppu: "100.00", _id: uuidv4()}
]
//GET http://localhost:3000/non-recyclables
nonRecyclableItemsRouter.get('/', (req, res) => {
    res.send(nonRecyclabes)
});

//GET http://localhost:3000/non-recyclables/_id    Single item by _id
nonRecyclableItemsRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleItem = nonRecyclabes.find(item => item._id === itemId)

     res.send(singleItem)
 })
// new item to POST http://localhost:3000/non-recyclables
nonRecyclableItemsRouter.post('/', (req, res) => {
    const newNonRec = req.body
    newNonRec._id = uuidv4()
    nonRecyclabes.push(newNonRec)
    res.send(`Added ${newNonRec.name} to database!`)
})

nonRecyclableItemsRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = nonRecyclabes.findIndex(item => item._id === itemId)
    nonRecyclabes.splice(itemIndex, 1)

    res.send('Resource successsfully deleted!')
})


nonRecyclableItemsRouter.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = nonRecyclabes.findIndex(item => item._id === itemId)
    const updatedItem = Object.assign(nonRecyclabes[itemIndex], req.body)

    res.send(`Resource successfully updated to ${updatedItem}`)
})


//exporting router
module.exports = nonRecyclableItemsRouter