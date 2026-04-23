const userModels = require("../models/userModels")


const { get } = require("../app")

 const getAllUsers = (req, res) => {
    const users = userModels.findAll()
    
    return res.json(users)
}

 const createUser=(req, res) => {
   const name= req.body.name
    const age= req.body.age
    
    const newUser = {
        id : Date.now(), 
        name : name, 
        age : age 
    }
    const createdUser = userModels.create(newUser)
    console.log(Date.now())
    userModels.create(newUser)
    res.status(201).json(createdUser)
}

const getUserById = (req, res) => {
    console.log()

    const id = req.params.id

    const user = userModels.findByid(id)

    return res.json (user)
}


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
}