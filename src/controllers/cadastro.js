const login = require('../model/login');
//const repositorio = require('../model/login');

module.exports = {
    async login(req, res){
        res.render('../views/login')
    },

    async cadastro(req, res){
        res.render('../views/cadastro')
    },

    async loginInsert(req, res) {
        const dados = req.body;
        await login.create({
            Usuario: dados.usuario,
            Email: dados.email,
            Senha: dados.senha
        });

        res.redirect('/');
    },

    async arquivo(req, res){
        const login = await login.findAll({
            raw: true,
            atributes: ['IDLogin', 'Nome', 'Desenho']
        });

        res.render('../views/repositorio', {login});
    }

    //repositorio
}