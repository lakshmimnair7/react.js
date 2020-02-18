const Properties= require('./models/Properties')
const Product = require('./models/Product')
const Category=require('./models/Category')
const Manufacture = require('./models/Manufacturer')


const db = require('./connector')

Product.hasOne(Properties)
//Product.hasMany(Properties)
Product.belongsTo(Category)

Product.belongsToMany(Manufacture,{
    through:"Product_Manufacture",
    foreignKey:"product_id",
    otherKey:"manufacture_id",
    timestamp:"false"
})


Manufacture.belongsToMany(Product,{
    through:"Product_Manufacture",
    foreignKey:"manufacture_id",
    otherKey:"product_id",
    timestamp:"false"
})

db.sync()