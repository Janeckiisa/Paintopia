const login = require('../model/login');
//const repositorio = require('../model/login');

module.exports = {
    async login(req, res) {
        res.render('../views/login')
    },

    async loginPost(req, res) {
        const { username, password } = req.body;

        login.findOne({
            where: {
                [Op.or]: [
                    { Usuario: username },
                    { Email: username }
                ],
                Senha: password
            }
        })
            .then(user => {
                if (user) {
                    req.session.user = user;
                    res.redirect('/repositorio');
                } else {
                    // Credenciais inválidas, retornar erro
                    res.render('../views/login', { errorMessage: 'Credenciais inválidas.' });
                }
            })
            .catch(error => {
                console.error('Erro no login:', error);
                res.render('../views/login', { errorMessage: 'Erro no login. Por favor, tente novamente mais tarde.' });
            });
    },

    async verificarUsuarioEmail(req, res) {
        const { usuario, email } = req.body;

        try {
            // Verificar se o usuário já existe
            const usuarioExistente = await login.findOne({ where: { Usuario: usuario } });
            if (usuarioExistente) {
                return res.status(400).send('O usuário já está em uso.');
            }

            // Verificar se o email já existe
            const emailExistente = await login.findOne({ where: { Email: email } });
            if (emailExistente) {
                return res.status(400).send('O email já está em uso.');
            }

            // Se o usuário e o email não existem, enviar uma resposta de sucesso
            res.sendStatus(200);
        } catch (error) {
            console.error('Erro ao verificar usuário e email:', error);
            res.status(500).send('Erro ao verificar usuário e email.');
        }
    },

    async cadastro(req, res) {
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

    async arquivo(req, res) {
        const login = await login.findAll({
            raw: true,
            attributes: ['IDLogin', 'Nome', 'Desenho']
        });

        res.render('../views/repositorio', { login });
    }

    //repositorio
}