const {Router} = require('express');
var request= require("request");
const dotenv = require('dotenv');
const ProductsDetail= require("../productdetail");
const router= Router();
var descripcion = require('./descripcion.js');

dotenv.config({path: './config/config.env'});

router.get("/:id",(req,res) => {
    var postData = [];
    request("https://api.mercadolibre.com/items/"+req.params.id,
        function (error, response, body){
            let zipProduct;
            if(!error && response.statusCode=== 200) {
                let responseDetail = JSON.parse(body);
                zipProduct=  new ProductsDetail(responseDetail.id,
                    responseDetail.title,
                    responseDetail.price,
                    responseDetail.thumbnail,
                    responseDetail.condition,
                    responseDetail.shipping.free_shipping,
                    responseDetail.currency_id,
                    responseDetail.sold_quantity
                    );
            }
            descripcion.callApi(req.params.id).then((datos)=> { console.log("**********"+datos);
                res.json( {"author":process.env.NAME,
                    "lastname":process.env.LASTNAME,"item":zipProduct,"description":datos});
            });

        });

});

module.exports = router;