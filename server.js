const express = require('express');
const mongoose = require('mongoose');

const app =express();
mongoose.connect('mongodb+srv://admin:1234@cluster0-slihp.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.error(err));

app.get('/', (req,res) => {
    res.send("Hello World")
})


app.listen(5000);