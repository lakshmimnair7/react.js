const express = require('express')
const Products = require('./database/models/Products')
const router = express.Router();
const Manufacture= require('./database/models/Manufacture')


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
        Products.create(newpdt).then(pdt => {
            Manufacture.findOne({where:{id:newManu}}).then(resManu => {
                pdt.setManufactures(resManu)
                console.log('saved')
            })
            
        })
        
       

    }
     res.json({"status":"executed"});
})
module.exports=router;
