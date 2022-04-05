import { Router } from 'express';

const router = new Router();

// GET /stream?pageSize=20
router.get('/', (req, res) => {
  console.log(req.query.pageSize);
  console.log(req.params.tipo);

  res
    .status(201)
    .json(req.header);
});


router.post('/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

router.patch('/:id', (req, res) => {
  // alteraMinhaStream(req.params.id, req.body);
  console.log("Alteracao do stream");
  res
    .status(201)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  //deletaMinhaStream(req.params.id, req.body);
  console.log("Delecao da stream");
  res
    .status(201);
});

export default router;