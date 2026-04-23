const users = require("../data/users")

 const findAll = ()=> {
    return users
 }   
const findByid = ( ) => {
   const id =1 
   
   const tamanhoArray = users.length
   
   let acheiUsuario = null 

   console.log (tamanhoArray)
 
   
 for ( let i = 0; i < tamanhoArray; i++){
    if  ( users[i].id == id) {
      acheiUsuario = users [i]
    }
   }

   return acheiUsuario


}
  const create = (newUser) => {
     users.push(newUser)
      
     return newUser
    }

  
 module.exports = {
    findAll,
    create,
   findByid,
   }