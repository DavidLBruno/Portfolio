import express from 'express';
import router from './controllers';

const server = express();

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));


server.use('/', router);

export default server;