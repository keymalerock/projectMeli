const request= require("request");

module.exports.callApi = function(id){

    _EXTERNAL_URL = "https://api.mercadolibre.com/items/"+id+"/description";
   return new Promise((resolve, reject) =>{

           request(_EXTERNAL_URL,  function (error, response, body)  {
               if(!error && response.statusCode=== 200) {
                   let responseDetail2 =  JSON.parse(body);
                   //console.log(responseDetail2);
                   //response.write(responseDetail2);
                   resolve( responseDetail2.plain_text);
                   //return await responseDetail2.plain_text;
               }
           })

   })

} ;