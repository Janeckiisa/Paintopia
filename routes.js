const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
//const cadastro = require('./src/controllers/cadastro);
//const desenho = require('./src/controllers/desenho);


route.get('/', home.pagInicialGet);

route.get('/cadastro', home.pagCadastroGet);

route.get('/login', home.pagLoginGet);

route.get('/criacao', home.pagCriacaoGet);

route.get('/repositorio', home.pagRepositorioGet)

module.exports = route;