const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key')

const User = require('./models/user');

const app = express();
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userData) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success:true
        })
    })
})

app.get('/', (req, res) => {
    res.json({" Hello ~hhhh": "Hi ~~"})
})

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(5050);