const express = require('express');

// const ProjectRouter = require('./data/helpers/ProjectRouter');

const server = express();

server.use(express.json());
// server.use('/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.json({ sanity: 'check'})
});

module.exports = server;