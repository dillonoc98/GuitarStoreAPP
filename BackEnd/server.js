//server 


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 2000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://Admin:Test123@cluster0-tjima.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    brand:String,
    type:String,
    poster:String,
    price:String
})

const GuitarModel =mongoose.model('guitar', guitarSchema)

app.use(cors());
app.use(bodyParser.urlencoded({  extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

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


  app.post('/api/guitars', (req,res) =>{

    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.brand);
    console.log(req.body.type);
    console.log(req.body.poster);
    console.log(req.body.price);

    GuitarModel.Create({
        brand: req.body.brand,
        type: req.body.type,
        poster: req.body.poster,
        price: req.body.price
    });
res.json('data uploaded')
  })

  app.get('/api/guitars/:id',(req,res)=>{
      console.log(req.paramms.id);

      GuitarModel.findById(req.res.id, (err, data) => {
          res.json(data);
      })
  })
  app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });