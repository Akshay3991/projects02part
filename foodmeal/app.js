const express = require('express');
const path = require('path');
const app = express();
const hostname = '127.0.0.1';
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loginfood');
const bodyparser = require("body-parser");
const port = 3000;


// define mongoose schema
const loginSchema = new  mongoose.Schema({
    name: String,
    email: String,
    password: String
}); 

var login = mongoose.model('login',loginSchema);



///////////////////////////////////////////////////////////

app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());
//pug specific stuff
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));
//endpoints
// app.get('/',(req,res)=>{
//      res.status(200).render('signup.pug');
// })

app.get('/',(req,res)=>{
     res.status(200).render('home.pug');
// })
// app.get('/',(req,res)=>{
//      res.status(200).render('signup.pug');
// })

/////////////////////////////////////////////////////////////////////////////

// app.post('/',(req,res)=>{
//     name = req.body.name
//     emailid = req.body.emailid
//     password = req.body.password
//     let outputToWrite = `the name of the client is ${name}, email-id is${emailid} , password is ${password}`
//     fs.writeFileSync('login.txt', outputToWrite)
//     res.status(200).render('login.pug');
// })
// app.post('/',(req,res)=>{
//     name = req.body.namel
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//    username = req.body.username
//     emailid = req.body.emailid
//     password = req.body.password
//     let outputToWrite = `the name of the client is ${name},age is  ${age} years old, gender is${gender}
//     permanent address is${address},username and password are hidden for others `
//     fs.writeFileSync('signup.txt', outputToWrite)
//     res.status(200).render('signup.pug');
// })

app.post('/login',(req,res)=>{
    const mydata = new login(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    });
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });