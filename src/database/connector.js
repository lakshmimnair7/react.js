const sequelize = require('sequelize');
const config = require('../config/config');

const db = new sequelize{
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host:config.db.host,
    }

}