const express=require("express");

const app=express();
const db=require("./config/database");

const productRoute=require("./routes/product.routes");

app.use(express.json());

app.use("",productRoute);

app.listen(3000,()=>{
    console.log("listhing to the port 3000");
})

db.connect();