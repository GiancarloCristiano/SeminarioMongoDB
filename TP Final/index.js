const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});
const MyProducts = mongoose.model('products', new Schema({ name: String, description: String, stock: Number, price: Number }));
const MySales = mongoose.model('sales', new Schema({ products: [String], totalPrice: Number, address: String }));

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

  app.patch('/product/:id', async (req, res) => {
    try {
      await MyProducts.findByIdAndUpdate(req.params.id, req.body)
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