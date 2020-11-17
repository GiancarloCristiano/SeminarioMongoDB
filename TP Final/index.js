const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/futbolfifa', {useNewUrlParser: true});
const MyClubs = mongoose.model('clubs', new Schema({ name: String, country: String }));
// Works
//MyClubs.findOne(function(error, result) { /* ... */ });



/*const clubSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  country: String,
});*/



app.get('/clubs', function (req, res) {
    MyClubs.find(function(error, result) {
        //console.log(result)
        res.send(result)
    });
})
 
app.listen(3000)