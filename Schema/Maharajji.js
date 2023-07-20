const mongoose=require("mongoose");

const Maharjischema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model("Maharaji__Images__Slider",Maharjischema);
