const router = require("express").Router();
const Galleryschema= require("../Schema/Gallery");

router.post("addgallery",async(req,res)=>{
    const newgallery = new Galleryschema(req.body);
    try {
        const savegallery= await newgallery.save();
        res.status(200).json(savegallery);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("getgallery",async (req,res)=>{
    const gallery = await Galleryschema.find();
    res.status(200).send(gallery);
})

module.exports=router;
