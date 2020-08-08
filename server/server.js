const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key')
const { auth } = require('./middleware/auth')
const { User } = require('./models/User');

const app = express();
mongoose.connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());


app.get('/api/user/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true,
            userData: userData
        })
    })
})

app.post('/api/user/login', (req, res) => {
    //find email
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({ loginSuccess: false, message: " Email not Found!" });
        //password compare 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: " Wrong Password!" })
            //generate Token
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('x_auth', user.token)
                    .status(200)
                    .json({
                        loginSuccess: true
                    })
            })


        })
    })
})

app.get('/api/user/logout',auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, userData) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).send({
            success: true
        })
    })
})

app.get('/', (req, res) => {
    res.json({ " Hello ~hhhh": "Hi ~~" })
})

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`server Runing at ${PORT}`)
});