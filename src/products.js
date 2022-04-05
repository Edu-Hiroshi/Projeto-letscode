import { Router } from 'express';

const router = new Router();

// antes tudo era /produtos
// mas ao usar:
// server.use('/produtos/', productRouter);
// no lugar de:
// server.use(productRouter);
// fica sem nada

// GET /produtos?pageSize=20
router.get('/', (req, res) => {
  console.log(req.query.pageSize);
  
  console.log(req.params.tipo);

  res
    .status(201)
    .json(req.header);
});

//  GET /produtos/fisico?pageSize=20
// router.get('/produtos/:tipo?', (req, res) => {
//  console.log(req.query.pageSize);
//  console.log(req.params.tipo);
// ...  

router.post('/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

router.patch('/:id', (req, res) => {
  alteraMeuProduto(req.params.id, req.body);

  res
    .status(201)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  deletaMeuProduto(req.params.id, req.body);
  
  res
    .status(201);
});


export default router;