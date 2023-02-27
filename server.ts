// import express from 'express';
// import path from 'path';
// const app = express();
// const path = require('path');


const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + '/db.json'));
const middlewares = jsonServer.defaults({
    static: path.resolve(__dirname + '/../build/')
});

const port = process.env.PORT || 3010;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running');
});

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'))
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     })
// }
