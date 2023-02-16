const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
//list of recyclable items
let recycledItems = [
    {name: "Beer Bottles",description: "Glass", recyclable:true, ppu: "7.10", _id: uuidv4()},
    {name: "Water Bottle", description: "Plastic", recyclable: true, ppu: "1.25", _id: uuidv4()},
    {name: "Boxes", description: "Cardboard", recyclable: true, ppu: "3.00", _id: uuidv4()},
    {name: "Newspaper", description: "Paper", recyclable: true, ppu: "1.50"},
]
//GET http://localhost:3000/recycled-items
recycledItemsRouter.get('/', (req, res) => {
    res.send(recycledItems);
})
//new item to POST http://localhost:3000/recycled-items
recycledItemsRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);
    res.send(`Added ${newItem.name} to database!`);
})
////exporting router
module.exports = recycledItemsRouter;