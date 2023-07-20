const router=require("express").Router();
// const router=require("express").Router();
// let router= require("express").Router();


const GeetaShlokschema = require("../Schema/GeetaShlok");

router.post("/addShlok",async(req,res)=>{
    const newGeetaShlok=new GeetaShlokschema(req.body);
    try {
        const saveShlok=await newGeetaShlok.save();
        res.status(200).json(saveShlok);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getShlok",async (req,res)=>{
    const shlok =await GeetaShlokschema.find();
    res.status(200).send(shlok);
})
module.exports=router;
