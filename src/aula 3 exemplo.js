import express from 'express';

const server = express();

// no navegador escrever localhost:3000/

server.get('/', () => {
  console.log('hello web');
});


server.listen(3000, () => {  // 3000 por convensão
  console.log('ok');
});