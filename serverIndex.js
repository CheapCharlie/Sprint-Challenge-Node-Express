const actionModel = require('./data/helpers/actionModel.js');
const projectModel = require('./data/helpers/projectModel.js');

const express = require('express');
const cors = require('cors');

const server = express();
var Port = 4000;

server.use(
    express.json(),
    cors()
);

server.get('/api/actions', (req, res) => {
    actionModel.get(req.params.id)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "Actions could not be retrieved." })
        })
})
server.get('/api/actions/:id', (req, res) => {
    actionModel.get(req.params.id)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This action could not be selected." })
        })
})
server.get('/api/projects', (req, res) => {
    projectModel.get()
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "Projects could not be retrieved." })
        })
})
server.get('/api/projects/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This project could not be selected." })
        })
})
server.get('/api/projects/project-actions/:id', (req, res) => {
    projectModel.getProjectActions(req.params.id)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This project's action(s) could not be selected." })
        })
})

server.post('/api/actions', (req, res) => {
    actionModel.insert(req.body)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This action(s) could not be added." })
        })
})
server.post('/api/projects', (req, res) => {
    projectModel.insert(req.body)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This project(s) could not be added." })
        })
})

server.put('/api/actions/:id', (req, res) => {
    actionModel.update(req.params.id, req.body)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This action could not be updated at this time." })
        })
})
server.put('/api/projects/:id', (req, res) => {
    projectModel.update(req.params.id, req.body)
        .then(response => {
            // console.log(response, 'response')
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This project could not be updated at this time." })
        })
})

server.listen(Port, () => {
    console.log(`Server at Port ${Port} is up an running!`)
});