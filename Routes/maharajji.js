const Maharjischema = require("../Schema/Maharajji");
const router=require("express").Router();

router.post("/addmaharajji",async(req,res)=>{
    const newMaharajji=new Maharjischema(req.body);
    try {
        const saveMaharji=await newMaharajji.save();
        res.status(200).json(saveMaharji);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getmaharajji",async (req,res)=>{
    const maharji =await Maharjischema.find();
    res.status(200).send(maharji);
})
module.exports=router;