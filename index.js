const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser")
const axios = require("axios")
var CryptoJS = require("crypto-js");
const app = express();
const port = 5000;
// data = [
//     {
//         "email": "aryan.basu@ptw.com",
//     }
// ];
var data=''
var cipherText = "This Text will be Encrypted using AES";
// console.log("Cipher Text : "+ cipherText);

var key = "secretkey.cx.tool.dubs.gg";
// console.log("Key : "+ key);

var encrptedText ='';
// console.log("Encrpted Text : "+ encrptedText.toString());

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });
  app.post("/submit", (req, res) => {
// console.log('jsnjsjs')
    data=req.body.email
    // console.log('email is',req.body.email)
    encrptedText = CryptoJS.AES.encrypt(req.body.email, key);
    // res.status(200).send("Form submitted successfully")
    res.redirect('https://ptw7976.zendesk.com/hc/en-us/requests/new?ticket_form_id=22165724085522');
    
    })
    
app.get("/", (req, res) => {
  const form = `
    <form action="/submit" method="post">
    <div>
    
        <label for="email">Email</label><br>
        <input type="email" name="email" required><br><br>
    </div>
 
    <div>
        <button>Submit</button>
    </div>
    </form>
`
  res.send(form)
})

//   app.get('/', (req, res) => {
//     res.status(200).send('Welcome to my server!');
// });



app.get('/data', (req, res) => {
  console.log('email is',data)
  encrptedText = CryptoJS.AES.encrypt(data, key);
  console.log('encrypt is',encrptedText)
   res.status(200).json(({
       data:encrptedText.toString()
        }));
  });
//   JSON.stringify(JSON.stringify(userPropertiesAsJsonString))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
