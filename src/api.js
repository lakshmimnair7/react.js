const express = require('express')
const Product = require('./database/models/Product')
const router = express.Router();



router.get("/",(req,res) => {
    Product.findAll({
        include:[{model:manufacture}]
    }).then(res1 => {
         res.json(res1);
    })
})

router.post('/product',(req,res) => {
    if(req.body !== null){
        console.log(req.body)
        let newpdt={
            name:req.body.name,
            price:req.body.price
        };
        Product.create(newpdt).then(pdt => {
            console.log('saved')
        })

    }
     res.json({"status":"executed"});
})