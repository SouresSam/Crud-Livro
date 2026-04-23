const express = require("express")
const userController = require ("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("VAI JAPA!!!")
})

app.use(express.json())

app.get("/users/:id", userController.getUserById)

app.post("/users", userController.createUser)

app.get("/users", userController.getAllUsers)
module.exports = app

