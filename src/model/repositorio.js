const Sequelize = require('sequelize');
const database = require('../config/db');
const login = require('./login');

const repositorio = database.define('Repositorio', {
    IDRepositorio: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    IDLogin: {
        type: Sequelize.INTEGER
    },

    Nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Desenho: {
        type: Sequelize.TEXT,
        allowNull: false
    }/*precisa de alterações*/
});

repositorio.belongsTo(login, {
    constraint: true,
    foreignKey: 'IDLogin',
    onDelete: CASCADE
});

module.exports = repositorio;