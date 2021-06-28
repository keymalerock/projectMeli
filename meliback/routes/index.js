const {Router} = require('express');
const router= new Router();
var request= require("request");
var Products= require("../product");
var PackSearch= require("../packsearch");
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

router.get("/api/items",(req,res) => {
    const user_id = req.query.q;

    request("https://api.mercadolibre.com/sites/MLA/search?q="+user_id,
        function (error, response, body){
            if(!error && response.statusCode=== 200){
                var larespuesta = JSON.parse(body);

                var objectResult = Object.keys(larespuesta)
                let category_id=[];
                let items=[];
                let nameCategory=[];

                objectResult.forEach(function(resultsKey) {
                    if (resultsKey==="results") {
                        let i=0;
                        for (let el of larespuesta["results"]) {
                            category_id[i]=el.category_id;
                             items[i++]=new Products(el.id,
                                el.title,
                                el.price,
                                el.thumbnail,
                                el.condition,
                                el.shipping.free_shipping,
                                el.prices.prices[0].currency_id
                            );
                            if (i === parseInt(process.env.LIMIT)) {
                                console.log("limite");
                                break;
                            }
                        }
                    }
                    /*if (resultsKey==="available_filters"){
                        let max=0;
                        larespuesta["available_filters"][0].values.forEach(function (category){
                            console.log(category.name);
                            if (category.results > max){
                                max=category.results;
                                nameCategory=category.name;
                            }
                        });
                        console.log("resultados max cate:"+max+ " para la categroria "+nameCategory);
                    }*/
                    if (resultsKey==="filters" && larespuesta["filters"]!== undefined && larespuesta["filters"].length > 0){
                        console.log("filtro: "+larespuesta["filters"])
                        larespuesta["filters"][0].values.forEach(function (category){
                            nameCategory[0]=category.name;
                        });
                    }

                });
                const masRepetido = ar => ar.reduce((acum, currenti, i, ar) => {
                        const count=ar.filter(e => e===currenti).length;
                         return count > acum[1] ? [currenti, count] : acum;
                    }, ["", 0]
                );
                //let repeated = masRepetido(category_id);
                nameCategory[1]=category_id;
                let packsearches = new PackSearch(items,nameCategory,process.env.NAME,process.env.LASTNAME);
                res.json(packsearches);
            }
        } );

});

//http://localhost:1981/api/items/MLA926942961
//api/items?q=:query
//https://api.mercadolibre.com/sites/MLA/search?q=:query
module.exports = router;