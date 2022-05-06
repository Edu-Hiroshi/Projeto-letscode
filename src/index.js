// REST e CRUD
// C: create = POST / PUT
// R: read   = GET
// U: update = PUT / PATCH
// D: delete = DELETE

import express from 'express';
import { streamRouter } from './routes/index.js';
import { itemRouter } from './routes/index.js';
import { PORT } from './constants.js';

const server = express();

server.use(express.json());
server.use('/stream/', streamRouter);
server.use('/item/', itemRouter);

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000, mas usando 3001 por convensão
  console.log(`Listening in on ${PORT}`);
});