const express = require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const proxy = express();
const PORT = 2000;

proxy.use(helmet());
proxy.use(cors());
proxy.use(parser.json());
proxy.use(parser.urlencoded({ extended: true }));
proxy.use(express.static(path.join(__dirname, '../static')));

proxy.listen(PORT, () => console.log('Listening on PORT:', PORT));