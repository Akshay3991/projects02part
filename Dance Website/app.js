const express = require("express");
const path = require("path");
const app = express();
const hostname = '127.0.0.1';
const port = 80;
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactdance');

// define mongoose schema
const contactschema = new mongoose.Schema({
     name: String,
     phone: String,
     email: String,
     address: String,
     desc: String,
});
let contact = mongoose.model('contact',contactschema);
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    const mydata = new contact(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the dataase")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
})






// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});




// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/akkikart');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console,"connection error:"));
// db.once('open', function(){
//     // we are connected
//     // console.log("we are connected")
// })

// const kittyschema = new mongoose.Schema({
//     name: String
// });
// kittyschema.methods.speak = function (){
//     var greeting = "my name is "+this.name
//     console.log(greeting);
// }
// let kitten = mongoose.model('kitten',kittyschema);

// let akkikitten = new kitten({name:'akkikitty'});
// let akkikitten2 = new kitten({name: 'akkikitty2'});
// // console.log(akkikitten.name);
// akkikitten.speak();

// akkikitten.save(function(err,kitten){
//     if(err) return console.error(err);
//     akkikitten.speak();
// });