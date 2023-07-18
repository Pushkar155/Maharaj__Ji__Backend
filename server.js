const express= require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authgallery= require("./Routes/gallery");
const authbranch = require("./Routes/branches");
const authevent = require("./Routes/events");
const app=express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

////// ALL Routes 

app.use("/API/gallery",authgallery);
app.use("/API/branch",authbranch);
app.use("API/event",authevent);

app.get("/",(req,res)=>{
    res.send("Hello World From Server");
})
mongoose.connect(process.env.MONGO__DB).then(()=>{app.listen(process.env.PORT,()=>{
    console.log((`Node Api Is Connected To ${process.env.PORT}`))
})
    console.log("Connected To MongoDb");
}).catch((error)=>{
    console.log(error);
})