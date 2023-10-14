const mongoose=require("mongoose");

const Anounceschema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        },
        address:{
            type: String,
            required: true,
        },
        map : {
            type: String,
            required:true,
        }

    },
    {timestamps:true}
);

module.exports=mongoose.model("Maharaji__Anounce__Info",Anounceschema);