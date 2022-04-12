// REST e CRUD
// C: create = POST / PUT
// R: read   = GET
// U: update = PUT / PATCH
// D: delete = DELETE

// eslint --init (mas precisa instalar)

// alternativa:     npx eslint --init
// perguntar se quer instalar localmente

import express from 'express';
// eslint-disable-next-line import/no-duplicates
import { streamRouter } from './routes';
// eslint-disable-next-line import/no-duplicates
import { canalRouter } from './routes';
// eslint-disable-next-line import/extensions
import { PORT } from './constants.js';

const server = express();

server.use(express.json());
server.use('/stream/', streamRouter);
server.use('/canal/', canalRouter);

// usar cráse para escrever port
server.listen(PORT, () => { // 3000 por convensão
  // console.log(`Listening in on ${PORT}`);
});
