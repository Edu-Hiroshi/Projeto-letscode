import mongoose from 'mongoose';

mongoose.connect('mongobd://localhost:27017/aula_db')
  .then(() => console.log('Conectado'));

const ProductSchema = new mongoose.Schema({
  name: String,
});

const ProductModel = mongoose.model('Product', ProductSchema);

/*
const meuProduto = new ProductModel();
meuProduto.name = 'teste';
meuProduto.save()
  .then(() => console.log('deu certo'))
  .catch((e) => console.error(e));
*/

ProductModel.find()
  .then((products) => {
    console.log(products);
  });
