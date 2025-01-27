const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const editar = require('./src/controllers/edit');
//const desenho = require('./src/controllers/desenho);


route.get('/', home.pagInicialGet);


route.get('/cadastro', cadastro.cadastro);
route.post('/cadastro', cadastro.loginInsert);

route.get('/login', cadastro.login);
route.post('/login', cadastro.loginPost);


route.get('/criacao', home.pagCriacaoGet);
//route.post('/criacao', desenho.salvarDesenho);

route.get('/repositorio', home.pagRepositorioGet);

route.get('/editar', editar.editGet);
route.post('/editar', editar.editPost);

route.post('/delete', editar.deletePost);

module.exports = route;