const express = require('express');
const cors = require("cors");
var CryptoJS = require("crypto-js");
const app = express();
const port = 5000;
// data = [
//     {
//         "email": "aryan.basu@ptw.com",
//     }
// ];
const data='aryan.basu@ptw.com'
var cipherText = "This Text will be Encrypted using AES";
// console.log("Cipher Text : "+ cipherText);

var key = "secretkey.cx.tool.dubs.gg";
console.log("Key : "+ key);

var encrptedText = CryptoJS.AES.encrypt(data, key);
console.log("Encrpted Text : "+ encrptedText.toString());

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });
  

  app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server!');
});
app.get('/data', (req, res) => {
   res.status(200).json(({
        data:data
        }));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});