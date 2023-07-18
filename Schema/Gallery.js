const mongoose=require("mongoose");

const Galleryschema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Maharaji__Gallery__Images",Galleryschema);
