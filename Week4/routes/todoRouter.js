const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
//List of todos
let todos = [
    {name: "Walk dog", description: "He loves walking in the snow", complete: false, _id: uuidv4()},
    {name: "Do homework", description: "It's due sunday", complete: false, _id:uuidv4()}
]
//GET  http://localhost:3000/todos
todoRouter.get('/', (req, res) => {
    res.send(todos)
})
// GET single item by id from http://localhost:3000/todos/_id
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoItem = todos.find(todo => todo._id === todoId)
    res.send(todoItem)
})
//POST new item to http://localhost:3000/todos
todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to todo list!`)
})
// DELETE single item from http://localhost:3000/todos
todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Todo item has been deleted!')
})
// PUT an item by id from http://localhost:3000/todos
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`Todo ${updatedTodo} has been updated`)
})
//Expors the todoRouter
module.exports = todoRouter