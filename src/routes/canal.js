import { Router } from 'express';

const router = new Router();

router.post('/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});


// GET /canal?pageSize=20
router.get('/', (req, res) => {
  console.log(req.query.pageSize);
  console.log(req.params.tipo);

  res
    .status(201)
    .json(req.header);
});


router.patch('/:id', (req, res) => {
  alteraMeuCanal(req.params.id, req.body);

  res
    .status(201)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  //deletaMeuCanal(req.params.id, req.body);
  console.log("Delecao do canal");
  
  res
    .status(201);
});

export default router;