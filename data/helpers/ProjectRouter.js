const express = require('express')
const db = require('../helpers/ProjectHelper')

const router = express.Router()
router.use(express.json());

router.get('/', (req, res) => {
    db.find()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(()=>{
        res.status(500).jason({error: "The projects information could not be retrieved."})
    })     
})
router.get('/resource', (req, res) => {
    db.findResource()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(()=>{
        res.status(500).jason({error: "The projects information could not be retrieved."})
    })     
})
router.get('/task', (req, res) => {
    db.findTask()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(()=>{
        res.status(500).jason({error: "The projects information could not be retrieved."})
    })     
})

router.post('/', (req, res) => {
  const project = req.body;
      db.insert(project)
      .then(newProject => {
        res.status(201).json(newProject);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new step' });
  });
})
  

router.post('/resource', (req, res) => {
    const resource = req.body;
    db.insertResource(resource)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed REE to create new step' });
    })
})    


router.post('/task', (req, res) => {
    const task = req.body;
    db.insertTask(task)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed REE to create new step' });
    })
})

module.exports = router