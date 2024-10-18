const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

app.get('/mongo', async (req, res)=>{

    await client.connect();
    console.log("connected?");
    // Send a ping to confirm a successful connection
    let result = await client.db("reeds-db").collection("whatever-collection").find({}).toArray()
      console.log(result);
  
      res.render('mongo', {
        mongoResult: result
      });
  
  })
  
  
  app.get('/', function (req, res) {
    // res.send('Hello World')
    res.sendFile('index.html')
  })
  
  app.get('/ejs', (req,res)=>{
  ``
    res.render('index', {
      myServerVariable : "something from server"
    });
  
    //can you get content from client...to console? 
  })
  
  app.get('/read', async (req,res)=> {
    console.log('in /mongo');
    await client.connect();
    
    console.log('connected?');
    // Send a ping to confirm a successful connection
    
    let result = await client.db("reeds-db").collection("whatever-collection")
      .find({}).toArray(); 
    console.log(result); 
  
    res.render('mongo', {
      postData : result
    });
  
  })
  
  app.get('/insert', async (req,res)=> {
  
    //connect to the db
    await client.connect();
    //point to the collection
    await client.db("reeds-db").collection("whatever-collection").insertOne({post:'hardcoded post insert'});
    await client.db("reeds-db").collection("whatever-collection").insertOne({ iJustMadeThisUp: 'hardcoded new key '});  
    // insert into it
    res.render('insert');
  
  });
  app.post('/update/:id', async (req,res)=>{
  
    console.log("req.parms.id: ", req.params.id)
  
    client.connect; 
    const collection = client.db("reeds-db").collection("whatever-collection");
    let result = await collection.findOneAndUpdate( 
    {"_id": new ObjectId(req.params.id)}, { $set: {"post": "NEW POST" } }
  )
  .then(result => {
    console.log(result); 
    res.redirect('/read');
  })
  
  });
  
  app.post('/delete/:id', async (req,res)=>{
  
    console.log("req.parms.id: ", req.params.id)
  
    client.connect; 
    const collection = client.db("reeds-db").collection("whatever-collection");
    let result = await collection.findOneAndDelete( 
    {"_id": new ObjectId(req.params.id)})
  
  .then(result => {
    console.log(result); 
    res.redirect('/read');
  })
  
    //insert into it
  
  })
  