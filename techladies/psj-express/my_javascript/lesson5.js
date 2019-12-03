// Initializing the To Do List array
let myToDo = []

// Adding some to-do list items
myToDo.push({ name: 'Get oolong tea from NTUC', done: false, type: 'shopping' })
myToDo.push({ name: 'Buy more cat feed', done: false, type: 'shopping' })
myToDo.push({ name: 'Pet the cat before leaving the house today', done: true, type: 'pet' })
myToDo.push({ name: 'Attend TechLadies Pre-Bootcamp Workshop 2', done: true, type: 'event' })

function displayToDos() {
  const myListElement = document.getElementById('myList')

  while (myListElement.firstChild) {
    myListElement.removeChild(myListElement.firstChild);
  }

  for(let i=0; i < myToDo.length; i++) {
    const currentItem = myToDo[i]

    let emoji
    switch (currentItem.type) {
      case 'shopping':
        emoji = '🛍'
        break
      case 'event':
        emoji = '🗓'
        break
      case 'pet':
        emoji = '🐱'
        break
      default:
        emoji = '📝'
        break
    }

    const newListElement = document.createElement("li")
    if (currentItem.done) {
      newListElement.className = 'done'
    }

    newListElement.innerText = emoji + ' ' + currentItem.name

    myListElement.appendChild(newListElement)
  }
}

function resetForm() {
  document.getElementById('todoTextField').value = ''
  document.getElementById('todoCategoryField').value = 'others'
}

function addNewTodo(todoTextStr, categoryStr) {
  if (todoTextStr.length == 0) { return false }

  if (todoTextStr.length > 0) {
    let newToDo = { name: todoTextStr, done: false, type: categoryStr }
    myToDo.push(newToDo)
  }

  return true
}

document.addEventListener("DOMContentLoaded", function(event) {
  displayToDos()

  const todoForm = document.getElementById("todoForm")
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let todoText = document.getElementById('todoTextField').value
    let todoCategory = document.getElementById('todoCategoryField').value

    if (addNewTodo(todoText, todoCategory)) {
      displayToDos()
    }

    resetForm()
  })
})