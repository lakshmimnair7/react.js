const Properties= require('./models/Properties')
const Products = require('./models/Products')
const Category=require('./models/Category')
const Manufacture = require('./models/Manufacture')
const user=require('./models/user')
const cart=require('./models/cart')

const db = require('./connector')

Products.hasOne(Properties)
//Product.hasMany(Properties)
Products.belongsTo(Category)

Products.belongsToMany(Manufacture,{
    through:"Product_Manufacture",
    foreignKey:"product_id",
    otherKey:"manufacture_id",
    timestamp:"false"
})


Manufacture.belongsToMany(Products,{
    through:"Product_Manufacture",
    foreignKey:"manufacture_id",
    otherKey:"products_id",
    timestamp:"false"
})
Products.belongsToMany(user,{
    through:"cart",
    foreignKey:"products_id",
    otherKey:"user_id",
    timestamp:"false"
})


user.belongsToMany(Products,{
    through:"cart",
    foreignKey:"user_id",
    otherKey:"products_id",
    timestamp:"false"
})


db.sync()