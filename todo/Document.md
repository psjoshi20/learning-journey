 simple attempt to creat express server -nodejs
todo list / create a simple crud operation attempt


app is running on server 5000

db - database is stored in project directory itself.
it is defined in array . /db/db.js
 Routes- 
 all routes are defineed here and then exported from this file

 controller/todos.js -- controller i.e. all crud functions are written here. they are exported from here

tested in postman
get,post and delete reqs executed correctly.
GET - working in postman
DELETE - WORKING IN POSTMAN
for post -need to ckh as postman app crashed several times

but I do not see it is reflected in db/db.js array 

part 1 working fine
part 2 with middle ware

in index.js 
export default router;
Now in app.js, import the router
import router from './routes/index.js';

to make use of middleware in express you use app.use(middleware)

Refactor The Callback Functions
from the root of your application create a new folder called todosController
$ mkdir todosControllers
in todosControllers folder create a file called todos
$ cd todosControllers
$ touch todos.js
Now inside todos.js we are going to create a class, this class is going to hold all our callback functions as its methods, whenever we need to make use of any of the methods we’ll create an instance of the class and get the method we need. let’s create this class.


o use the methods in this class we created an instance of the class and export it. now in our routes files(routes/index.js) we will import the class instance we just created and use its methods as callbacks instead of the anonymous function we were using before, let’s replace all of this functions with a method that does exactly the same thing they do.
First we import the object, go to index.js in routes folder and do this.
import todoController from '../todosControllers/todos';
Now replace the function with their equivalent method of the todoController object. our index.js file should look like this.

// routes are define or called here
router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

part  3- seq

