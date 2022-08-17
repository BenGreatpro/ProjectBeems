const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const PORT =   3000
const shoeRoute = require('./Routes/shoe.route');
const userRoute = require('./Routes/user.route')
const {auth} = require("./middleware/verify")

app.use(express.json());
app.use(express.urlencoded({extended: false}))


mongoose
.connect(process.env.DB_URL) // this is where your db url will enter
.then(() => console.log("DB Up and Running"))
.catch((err) => console.log(err.message));


app.get('/', (req, res) => {
    res.send("<h1>this is the beginning</h1>")
})

app.use('/shoe', shoeRoute);

app.use('/signup', userRoute)

app.get('/about', auth, (req, res) => {
    res.json({message: "my about route"})
})


app.listen(PORT, () => console.log('Server is active on PORT: '+PORT) )