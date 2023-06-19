const express = require('express');
const ejs = require('ejs');
// const bodyParser = require("body-parser");




const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//Routes
app.get('/', (req, res) => {
    res.render('home')
})



//Server

const PORT = 9000
app.listen(9000, () => {
    console.log(`You are listening to port ${PORT}`);
})