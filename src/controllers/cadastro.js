const login = require('../model/login');
const { Op } = require('sequelize');
//const repositorio = require('../model/login');

module.exports = {
    async login(req, res) {
        res.render('../views/login')
    },

    async loginPost(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        console.log(req.body)

        if (!username || !password) {
            return res.status(400).send('Usuário ou senha não fornecidos.');
        }

        try {
            const user = await login.findOne({
                raw:true,
                where: {
                    [Op.or]: [
                        { Usuario: username },
                        { Email: username }
                    ]
                }
            });

            if (!user) {
                return res.status(400).send('Usuário não encontrado.');
            }

            if (user.Senha !== password) {
                return res.status(400).send('Senha incorreta.');
            }

            // req.session.user = user;
            global.IDUser = user.IDLogin;
            console.log("Login:", IDUser);
            res.render('../views/criacao',{user, IDUser});
        } catch (error) {
            console.error('Erro no login:', error);
            res.status(500).send('Erro ao fazer login.');
        }
    },

    async cadastro(req, res) {
        res.render('../views/cadastro')
    },

    async loginInsert(req, res) {
        const usuario = req.body.usuario;
        const email = req.body.email;
        const senha = req.body.senha;

        if (!usuario || !email || !senha) {
            return res.status(400).send('Usuário, email ou senha não fornecidos.');
        }

        try {
            const usuarioExistente = await login.findOne({ where: { Usuario: usuario } });
            const emailExistente = await login.findOne({ where: { Email: email } });

            if (usuarioExistente) {
                return res.status(400).send('O usuário já está em uso.');
            }

            if (emailExistente) {
                return res.status(400).send('O email já está em uso.');
            }

            await login.create({
                Usuario: usuario,
                Email: email,
                Senha: senha
            });


            res.redirect('/login');
        } catch (error) {
            console.error('Erro no cadastro:', error);
            res.status(500).send('Erro ao cadastrar usuário.');
        }
    },

    async arquivo(req, res) {
        const login = await login.findAll({
            raw: true,
            attributes: ['IDLogin', 'Nome', 'Desenho']
        });

        res.render('../views/repositorio', { login });
    }

    //repositorio
}