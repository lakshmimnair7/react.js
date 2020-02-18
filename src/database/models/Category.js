const db = require("../connector");
const sequelize =require('sequelize');

module.exports = db.define(
    "Category",
    {
        "name":{
            type: sequelize.STRING
        }
    }
);