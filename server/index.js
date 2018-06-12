const express = require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

// const { router } = require('../server/routers')

const app = express();
const PORT = 2000;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(PORT, () => console.log('Listening on PORT:', PORT));