const express = require('express')
const Product = require('./database/models/Product')
const router = express.Router();
const Manufacture= require('./database/models/Manufacturer')


router.get("/",(req,res) => {
    Product.findAll({
        include:[{model:Manufacture}]
    }).then(res1 => {
         res.json(res1);
    })
})

router.post('/',(req,res) => {
    if(req.body !== null){
        console.log(req.body)
        let newpdt={
            name:req.body.name,
            price:req.body.price
        };
        let newManu = req.body.Manufacture;
        Product.create(newpdt).then(pdt => {
            Manufacture.findOne({where:{id:newManu}}).then(resManu => {
                pdt.setManufactures(resManu)
                console.log('saved')
            })
            
        })
        
       

    }
     res.json({"status":"executed"});
})