const Sequelize = require('sequelize');
const database = require('../config/db');

const login = database.define('Login', {
    IDLogin: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Usuario: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Senha: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
});

module.exports = login;