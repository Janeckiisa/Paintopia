const sequelize = require('sequelize');

const database = new sequelize('Paintopia', 'paint', '12435901', 
{
    dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();

module.exports = database;
