import express from 'express';

const PORT = 3000;

const server = express();

server.use(express.json());

// software Postman
// requisição de um post em em corpo 
server.post('/echo', (req, res) => {
    console.log(req.body);  // recebe mensagens
    res.send('ok');
});

// no navegador escrever localhost:3000/
server.get('/', (request, response) => {
    response.json(request.header);
});

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});