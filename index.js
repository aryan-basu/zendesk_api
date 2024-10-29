const express = require('express');
const cors = require("cors");

const app = express();
const port = 5000;
data = [
    {
        "email": "aryan.basu@ptw.com",
    }
];
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
        data: {
            email: 'aryan.basu@ptw.com'
        }
        }));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
