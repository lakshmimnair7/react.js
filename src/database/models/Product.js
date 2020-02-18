const db = require("../connector");
const sequelize =require('sequelize');

module.exports = db.define(
    "product",
    {
        "name":{
            type: sequelize.STRING
        },
        "price":{
            type:sequelize.DOUBLE
        }
    }
);