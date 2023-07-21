const mongoose=require("mongoose");

const Eventschema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
        name:{
            type: String,
            required: true,
        },
        text:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Maharaji__Events__Info",Eventschema);

