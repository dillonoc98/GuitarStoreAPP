
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

//string from mongoDB with username and password to gain access

const mongoDB = 'mongodb+srv://Admin:Test123@cluster0-tjima.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    brand:String,
    type:String,
    poster:String,
    price:String
});

const GuitarModel = mongoose.model('guitar', guitarSchema);

//use cors to manage cross origin requests
//body parser is used as a middleware module to extract the body of an incoming request
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//function for http request, response & callback
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
// respond with "hello world" when a GET request is made
app.get('/', (req, res) => {
    res.send('hello world');
  }) 

  app.get('/api/guitars', (req,res,next) => {
    console.log("get request")
    GuitarModel.find((err,data)=>{
      res.json({guitars:data});
    })
  })

  
app.delete('/api/guitars/:id', (req,res) =>{
    console.log(req.params.id);
  
    GuitarModel.deleteOne({_id:req.params.id},(error,data)=>{
      if(error)
        res.json(error);
        
      res.json(data);
    })
  })

  app.get('/api/guitars/search/:brand/:criteria', (req,res)=>{
    console.log(req.params.brand);
    console.log(req.params.criteria);
  if(req.params.criteria == 'brand')
    {
    GuitarModel.find({ 'brand': req.params.brand},
  (error,data) =>{
    res.json(data);
  })
    }
  })

//adds guitar to db
  app.post('/api/guitars', (req,res) =>{

    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.brand);
    console.log(req.body.type);
    console.log(req.body.poster);
    console.log(req.body.price);

    GuitarModel.create({
        brand: req.body.brand,
        type: req.body.type,
        poster: req.body.poster,
        price: req.body.price
    });
res.json('data uploaded')
  })
  
  //note*bellow is new 
  app.get('/api/guitars/:id', (req,res)=>{
    console.log(req.params.id);
    GuitarModel.findById(req.params.id, (err, data)=>{
      res.json(data);
      console.log("New Get on server log");
    })
  });
  


app.put('/api/guitars/:id', (req, res)=>{
  
  console.log("Edit "+req.res);
  console.log(req.params.id);
  GuitarModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,data)=>{
    res.send(data);
    })
})
  app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });
  