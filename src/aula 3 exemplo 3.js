import express from 'express';

const PORT = 3000;

const server = express();

// no navegador escrever localhost:3000/

server.get('/', (request, response) => {
  console.log('hello web');

  response.send('<html><head><tittle>minhapagina</tittle></head><body><button>teste</button>teste-de-body</body></html>');
});

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});