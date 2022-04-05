// REST e CRUD
// C: create = POST / PUT
// R: read   = GET
// U: update = PUT / PATCH
// D: delete = DELETE

import express from 'express';

const PORT = 3000;

const server = express();

server.use(express.json());

// GET /produtos?pageSize=20
server.get('/produtos', (req, res) => {
  console.log(req.query.pageSize);
  
  console.log(req.params.tipo);

  res
    .status(201)
    .json(req.header);
});

//  GET /produtos/fisico?pageSize=20
// server.get('/produtos/:tipo?', (req, res) => {
//  console.log(req.query.pageSize);
//  console.log(req.params.tipo);
// ...  

server.post('/produtos/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

server.patch('/produtos/:id', (req, res) => {
  alteraMeuProduto(req.params.id, req.body);

  res
    .status(201)
    .json(req.body);
});

server.delete('/produtos/:id', (req, res) => {
  deletaMeuProduto(req.params.id, req.body);
  
  res
    .status(201);
});


// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});