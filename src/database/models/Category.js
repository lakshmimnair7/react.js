const db = require("../connector");
const sequelize =require('sequelize');

const Category = db.define(
    "Category",
    {
        "name":{
            type: sequelize.STRING
        }
    }
);