router middleware 
const express = require('express');
const  db = require('../db/db');
// import crud functions from controller/todos.js
const TodoController = require('../todosController/todos');

const router = express.Router();// router handler 
router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);


// the following code moved from app.js 
// router.get('/api/v1/todos', (req, res) => {
//   res.status(200).send({
//     success: 'true',
//     message: 'todos retrieved successfully',
//     todos: db,
//   });
// });

// router.get('/api/v1/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   db.map((todo) => {
//     if (todo.id === id) {
//       return res.status(200).send({
//         success: 'true',
//         message: 'todo retrieved successfully',
//         todo,
//       });
//     }
//   });
//   if (!todo.Id) {
//     errors.title = "item  not found";
//     res.status(404).json({ errors });
//     // stop further execution in this callback
//     return;
//   }
// //   return res.status(404).send({
// //     success: 'false',
// //     message: 'todo does not exist',
// //   });
// });

// router.post('/api/v1/todos', (req, res) => {
//   if (!req.body.title) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'title is required',
//     });
//   } else if (!req.body.description) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'description is required',
//     });
//   }
//   const todo = {
//     id: db.length + 1,
//     title: req.body.title,
//     description: req.body.description,
//   };
//   db.push(todo);
//   return res.status(201).send({
//     success: 'true',
//     message: 'todo added successfully',
//     todo,
//   });
// });


// router.put('/api/v1/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   let todoFound;
//   let itemIndex;
//   db.map((todo, index) => {
//     if (todo.id === id) {
//       todoFound = todo;
//       itemIndex = index;
//     }
//   });

//   if (!todoFound) {
//     return res.status(404).send({
//       success: 'false',
//       message: 'todo not found',
//     });
//   }

//   if (!req.body.title) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'title is required',
//     });
//   } else if (!req.body.description) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'description is required',
//     });
//   }

//   const newTodo = {
//     id: todoFound.id,
//     title: req.body.title || todoFound.title,
//     description: req.body.description || todoFound.description,
//   };

//   db.splice(itemIndex, 1, newTodo);

//   return res.status(201).send({
//     success: 'true',
//     message: 'todo added successfully',
//     newTodo,
//   });
// });

// router.delete('/api/v1/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   let todoFound;
//   let itemIndex;
//   db.map((todo, index) => {
//     if (todo.id === id) {
//       todoFound = todo;
//       itemIndex = index;
//     }
//   });

//   if (!todoFound) {
//     return res.status(404).send({
//       success: 'false',
//       message: 'todo not found',
//     });
//   }
//   db.splice(itemIndex, 1);

//   return res.status(200).send({
//     success: 'true',
//     message: 'Todo deleted successfuly',
//   });
// });

//To make use of this routes in our app we need to import it into app.js, 
//to import it into app.js we need to export it from index.js inside of the route folder, let’s do that.
//exports.router = router
module.exports = router
;
