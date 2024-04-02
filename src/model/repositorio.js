const Sequelize = require('sequelize');
const database = require('../config/db');

const repositorio = database.define('Repositorio', {
    IDRepositorio: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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