//for crud operation - controllers are used . this is our user controller
import model from '../models'; 

const { User } = model;

 class Users { 
     static signUp(req, res) {
      const 
        { name, username, email, password } = req.body; 
          return User 
        .create ({ name, username, email, password }) = req.body
        .then(userData => res.status(201).send({ 
           success: true,
         message: 'User successfully created',
         userData 
      })) 
   } 
} 
export default Users;