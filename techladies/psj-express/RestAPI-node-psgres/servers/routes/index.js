// we are  going to define endpoints for API
//The first endpoint which is the /api endpoint has an 
//HTTP Method of GET which can be translated as READ in the CRUD 
//operation.
import Users from '../controllers/user'; 
export default (app) => {
     app.get('/api', (req, res) => 
     res.status(200).send(
         { message: 'Welcome to the BookStore API!', }
         )); 
         app.post('/api/users', Users.signUp); 
         // API route for user to signup 
        }; 
// his second endpoint which is the /api/users endpoint has 
//an HTTP Method of POST which can be translated as CREATE in the CRUD 
//operation. Whenever we hit this API endpoint, we are calling the 
//signUp method from our Users class which is going to create a new user.
