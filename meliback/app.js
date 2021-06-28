const express = require("express");
const app= express();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

//app.set('port',1981);

dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 4500;
//parsear el body
app.use(cors());
app.use(express.json());
app.use(require("./routes/index"));
app.use("/api/items",require("./routes/detalles"));

app.listen(PORT, function(){
    console.log('Erick made an boot of Server at http://localhost:' + PORT);
});
