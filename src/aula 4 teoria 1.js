import express from 'express';

const PORT = 3000;

const server = express();

server.use(express.json());

// REST e CRUD
// C: create = POST / PUT
// R: read   = GET
// U: update = PUT / PATCH
// D: delete = DELETE

// query
// post echo/xpto
// post echo/xpto?page=1&filter=true
server.post('/echo/xpto', (req, res) => {
    res.json(req.body);
});

// GET /user?minAge=30&pageSize=20
server.get('/user/', (request, response) => {
  response.json(request.header);
});

// GET /produtos?pageSize=20
// GET /produtos/fisico?pageSize=20
// GET /produtos/digital?pageSize=20
server.get('/produtos/', (request, response) => {
    response.json(request.header);
});

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});