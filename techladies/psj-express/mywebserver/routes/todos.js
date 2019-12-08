var express = require('express')
var router = express.Router()

const myToDo =[]

myToDo.push({ id: 0, name: 'Get oolong tea from NTUC', done: false, type: 'shopping' })
myToDo.push({ id: 1, name: 'Buy more cat feed', done: false, type: 'shopping' })
myToDo.push({ id: 2, name: 'Pet the cat before leaving the house today', done: true, type: 'pet' })
myToDo.push({ id: 3, name: 'Attend TechLadies Pre-Bootcamp Workshop 2', done: true, type: 'event' })

router.get('/',function(req,res,next){
res.json(myToDo)
})
router.post('/',function(req,res,next){
    const { name,type } = req.body

    if (name.length == 0) {
        return res.json({error: 'No To Do provided'})
    }
    const newToDo = { id: myToDo.length, name: name, done: false, type: type }
  myToDo.push(newToDo)
  
  res.json({status: 'OK'})
    })
    router.put('/:id', function(req, res, next) {
        const putKeys = Object.keys(req.body)
      
        const pos = req.params.id
      
        if (putKeys.includes('name')) {
          myToDo[pos].name = req.body.name
        }
      
        if (putKeys.includes('done')) {
          myToDo[pos].done = req.body.done
        }
      
        if (putKeys.includes('type')) {
          myToDo[pos].type = req.body.type
        }
      
        res.json({status: 'OK'})
      })
      
      module.exports = router;