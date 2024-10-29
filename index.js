const express = require('express');

const app = express();
const port = 5000;
data = [
    {
        "email": "aryan.basu@ptw.com",
    }
];
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
app.get('/data', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
