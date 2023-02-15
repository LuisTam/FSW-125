const express = require('express');
const nonRecyclableItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let nonRecyclabes = [
    {name: "Batteries", description: "all kind", recyclable: false, ppu: "10.00", _id: uuidv4()},
    {name: "Tires", description: "rubber", recyclable: false, ppu: "50.00", _id: uuidv4()},
    {name: "Plastic Bag", description: "Plastic", recyclable: false, ppu: ".10", _id: uuidv4()},
    {name: "Appliances", description: "all kind", recyclable: false, ppu: "100.00", _id: uuidv4()}
]

nonRecyclableItemsRouter.get('/', (req, res) => {
    res.send(nonRecyclabes);
})

nonRecyclableItemsRouter.post('/', (req, res) => {
    const newNonRec = req.body;
    newNonRec._id = uuidv4();
    nonRecyclabes.push(newNonRec);
    res.send(`Added ${newNonRec.name} to database!`)
})

module.exports = nonRecyclableItemsRouter;