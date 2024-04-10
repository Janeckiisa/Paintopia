const { raw } = require('express');
const login = require('../model/login');
const { where } = require('sequelize');

module.exports = {
    async editGet(req, res) {
        console.log(IDUser);

        const user = await login.findByPk(IDUser, {
            raw: true,
            atributes: ['Usuario', 'Email', 'Senha']
        })

        res.render('../views/editar', { user })
    },
    async editPost(req, res) {
        const data = req.body;

        if (data.senha == data.senhaConfirmar) {
            await login.update({
                Usuario: data.usuario,
                Email: data.email,
                Senha: data.senhaConfirmar
            },
                {
                    where: { IDLogin: IDUser }
                });
        }
        else

        res.redirect('/editar');
    },
    async deleteUser(req, res){
        await login.destroy({

        
    },
        {where: {IDLogin: ISUser}
    });

}
}