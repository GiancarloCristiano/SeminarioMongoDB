const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { Schema } = mongoose;
const bodyParser = require("body-parser");
app.use(express.json()); // Make sure it comes back as json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});
const MyProducts = mongoose.model('products', new Schema({
   name: String, description: String, stock: Number, price: Number }, {
  versionKey: false // You should be aware of the outcome after set to false
}));
const MySales = mongoose.model('sales', new Schema({ products: [String], totalPrice: Number, address: String }, {
  versionKey: false // You should be aware of the outcome after set to false
}));

//SALES
app.get('/sales', async (req, res) => {
  const sales = await MySales.find({});
  try {
    res.send(sales);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/sale', async (req, res) => {
  const sale = new MySales(req.body);
  try {
    await sale.save();
    res.send(sale);
  } catch (err) {
    res.status(500).send(err);
  }
});

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
      await MyProducts.save()
      res.send(product)
    } catch (err) {
      res.status(500).send(err)
    }
  })


  //COMO LLAMAR A LOS PRODUCTOS DESDE VENTAS. AL TRAERLOS, CHEQUEAR SI EXISTE, SI HAY STOCK Y MODIFICAR EL MISMO.
  //EN VENTAS MANDAMOS UN ARRAY DE OBJETOS O DE IDs?
  //










app.listen(3000)