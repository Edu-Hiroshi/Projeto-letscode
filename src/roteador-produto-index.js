// REST e CRUD
// C: create = POST / PUT
// R: read   = GET
// U: update = PUT / PATCH
// D: delete = DELETE

import express from 'express';
import productRouter from './products.js';

const PORT = 3000;

const server = express();

server.use(express.json());
server.use('/produtos/', productRouter);

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});