const express = require('express')
const athleteRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let athletes = [
    {name: "Nate Diaz", sport: "MMA", retired: true, net: 2.2, _id: uuidv4()},
    {name: "Sergio Perez", sport: "F1", retired: false, net: 75, _id: uuidv4()},
    {name: "Lionel Messi", sport: "Soccer", retired: false, net: 620, _id: uuidv4()},
    {name: "Saul Alvarez", sport: "Boxing", retired: false, net: 180, _id:uuidv4()},
    {name: "Rafael Marquez", sport: "Soccer", retired: true, net: 25, _id:uuidv4()},
    {name: "Julio Cesar Chavez", sport: "Boxing", retired: true, net: 10, _id:uuidv4()},
    {name: "Sebastian Vettel", sport: "f1", retired: true, net: 140, _id: uuidv4()},
    {name: "Justin Gaethje", sport: "MMA", retired: false, net: 4, _id:uuidv4()}
]

athleteRouter.get('/', (req, res) => {
    res.send(athletes)
})


athleteRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleAth = athletes.find(item => item._id === itemId)

    res.send(singleAth)
})


athleteRouter.post('/', (req, res) => {
    const newAth = req.body
    newAth._id = uuidv4()
    data.push(newAth)
    res.send(newAth)
})


athleteRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleAthIndex = athletes.findIndex(item => item._id === itemId)
    athletes.splice(singleAthIndex, 1)

    res.send('Resource successfully deleted!')
})


athleteRouter.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const singleAthIndex = athletes.findIndex(item => item._id === itemId)
    const updatedAthData = Object.assign(athletes[singleAthIndex], req.body)

    res.send(`Resource successfully updated ${updatedAthData}`)
})


module.exports = athleteRouter