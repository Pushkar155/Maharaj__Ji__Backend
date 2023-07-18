const mongoose=require("mongoose");

const Branheschema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
        name:{
            type: String,
            required: true,
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Maharaji__Branches__Info",Branheschema);
