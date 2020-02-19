const db = require("../connector");
const sequelize =require('sequelize');

module.exports = db.define(
    "user",
    {
        "name":{
            type:sequelize.STRING
        },
        "password":{
            type:sequelize.DOUBLE
    }
}
);