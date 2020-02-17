const db = require("../connector");
const sequelize =require('sequelize');

const Product = db.define(
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