const mongoose=require("mongoose");

const GeetaShlokschema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model("Maharaji__GeetaShlok__Images",GeetaShlokschema);
