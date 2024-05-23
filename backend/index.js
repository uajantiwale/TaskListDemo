const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html', (error) => {
    if (error) console.log(error);
  });
});

app.listen(port, () => {
  console.log(`Express app is listening  on port ${port}`);
});
