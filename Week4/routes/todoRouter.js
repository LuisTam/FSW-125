const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let todos = [
    {name: "Walk dog", description: "He loves walking in the snow", complete: false, _id: uuidv4()},
    {name: "Do homework", description: "It's due sunday", complete: false, _id:uuidv4()}
]

todoRouter.get('/', (req, res) => {
    res.send(todos)
})

todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoItem = todos.find(todo => todo._id === todoId)
    res.send(todoItem)
})

todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to todo list!`)
})


todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Todo item has been deleted!')
})

todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`Todo ${updatedTodo} has been updated`)
})
module.exports = todoRouter