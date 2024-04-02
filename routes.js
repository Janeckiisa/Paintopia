const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');

route.get('/', home.pagInicialGet);

route.get('/cadastro', home.pagCadastroGet);

route.get('/login', home.pagLoginGet);

route.get('/criacao', home.pagCriacaoGet);

module.exports = route;