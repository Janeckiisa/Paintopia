const sequelize = require('sequelize');

const database = new sequelize('Paintopia', 'Administrator', '12435901', 
{
    dialect: 'mssql', host:'localhost', port: 1443
});

database.sync();

module.exports = database;