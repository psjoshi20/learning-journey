// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// we are  going to define endpoints for API
//The first endpoint which is the /api endpoint has an 
//HTTP Method of GET which can be translated as READ in the CRUD 
//operation.
import Users from '../controllers/route/user'; 
//import book from '../controllers/routes/';
export default (app) => {
     app.get('/api', (req, res) => 
     res.status(200).send(
         { message: 'Welcome to the BookStore API!', }
         )); 
         app.post('/api/users', Users.signUp); 
         // API route for user to signup 
        }; 
// this second endpoint which is the /api/users endpoint has 
//an HTTP Method of POST which can be translated as CREATE in the CRUD 
//operation. Whenever we hit this API endpoint, we are calling the 
//signUp method from our Users class which is going to create a new user.
// app.post('/api/users/:userId/books', Books.create); // API route for user to create a book };
