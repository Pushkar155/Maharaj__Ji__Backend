const Maharjischema = require("../Schema/Maharajji");
const router=require("express").Router();

router.post("/addmaharajji",async(req,res)=>{
    const newGeetaShlok=new GeetaShlokschema(req.body);
    try {
        const saveShlok=await newGeetaShlok.save();
        res.status(200).json(saveShlok);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getmaharajji",async (req,res)=>{
    const shlok =await GeetaShlokschema.find();
    res.status(200).send(shlok);
})
module.exports=router;