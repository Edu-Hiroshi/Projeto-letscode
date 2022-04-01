import express from 'express';

const PORT = 3000;

const server = express();

// no navegador escrever localhost:3000/
server.get('/', (request, response) => {
    console.log(request.header);
    // console.log(request.header.pragma);
  
    const meuObj = {
        status: "OK",
        data: {
            username: "Hiroshi",
            age: 21,
        },
    };
    response.send(JSON.stringify(meuObj));
    // response.json(meuObj);
    // response.json(request.header);
});

// usar cráse para escrever port
server.listen(PORT, () => {  // 3000 por convensão
  console.log(`Listening in on ${PORT}`);
});