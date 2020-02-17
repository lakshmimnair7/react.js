const db = require("../connector");
const sequelize =require('sequelize');

const Properties = db.define(
    "Properties",
    {
        "color":{
            type:sequelize.STRING
        },
        "weight":{
            type:sequelize.STRING
        }

    }
);