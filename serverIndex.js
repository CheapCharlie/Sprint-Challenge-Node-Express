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

server.listen(Port, () => {
    console.log(`Server at Port ${Port} is up an running!`)
});