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
    
});

router.post('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    
});

module.exports = router