const express = require('express');
const {dbConnect} = require("./config/dbConnect")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery', true);

//routes
const {customerRouter} = require("./modules/Customer/customerRoutes")
const {orderRouter} = require("./modules/Order/orderRoutes")
const {productRouter} = require("./modules/Product/produectRoutes")
const {checkoutRouter} = require("./modules/checkout/checkoutRoute")


const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please posts / to get all products")
})


app.use('/user',customerRouter);
app.use('/order',orderRouter);
app.use('/product',productRouter);
app.use('/checkout',checkoutRouter);


// starting Database

async function start(){
    await dbConnect();
    
    app.listen(4000 ,(err)=>{
        console.log(" Server listening on http://localhost:4000");
    });
    
}
start();