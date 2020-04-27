import express from 'express';
import Routes from './src/routes';

require('dotenv').config({
  path: process.env.NODE_ENV !== 'production' ? './src/config/.env.dev' : './src/config/.env',
});

const server = express();

server.use(express.json());
server.use(Routes);

server.listen(process.env.PORT);
