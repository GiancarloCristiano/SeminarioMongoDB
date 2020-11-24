const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { Schema } = mongoose;
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://mongo-user:seminario@seminariomongo.uuywt.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true});

const MyProducts = mongoose.model('products', new Schema({
   name: String, description: String, stock: Number, price: Number }, {
  versionKey: false
}));
const MySales = mongoose.model('sales', new Schema({ products: [String], totalPrice: Number, address: String }, {
  versionKey: false
}));

//PRODUCTS
  app.get('/products', async (req, res) => {
    const products = await MyProducts.find({});
    try {
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/product', async (req, res) => {
    const product = new MyProducts(req.body);
    try {
      await product.save();
      res.send(product);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

  app.delete('/product/:id', async (req, res) => {
    try {
      const product = await MyProducts.findByIdAndDelete(req.params.id)
      if (!product) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

  app.put('/product/:id', async (req, res) => {
    const product = new MyProducts(req.body);
    console.log(product)
    try {
      await MyProducts.findByIdAndUpdate(req.params.id, product)
      res.send(product)
    } catch (err) {
      res.status(500).send(err)
    }
  })



//SALES
app.get('/sales', async (req, res) => {
  const sales = await MySales.find({});
  try {
    res.send(sales);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/sale',  async (req, res) => {
  let body = req.body;
  let totalPrice = await getPrice(body.products);
  await sellProduct(body.products);
  try {
  const sale = new MySales();
  sale.products = body.products;
  sale.totalPrice = totalPrice; 
  sale.address = body.address;
    await sale.save();
    res.send(sale);
  } catch (err) {
    res.status(500).send(err);
  }
});

async function getPrice (products) {
  let totalPrice = 0;
  for (const prodId of products) {
    const product = await MyProducts.findOne(prodId);
    totalPrice += product.price;
  }
  return totalPrice;
}

async function sellProduct (products) {
    for (const prodId of products) {
    const product = await MyProducts.findOne(prodId);
    product.stock--;
    await MyProducts.findByIdAndUpdate(prodId, new MyProducts(product))
  }
}

app.delete('/sale/:id', async (req, res) => {
  try {
    const sale = await MySales.findByIdAndDelete(req.params.id)
    if (!sale) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})





app.listen(3000)