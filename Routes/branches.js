const router=require("express").Router();
const Branheschema = require("../Schema/Branches");

router.post("/addBranch",async(req,res)=>{
    const newBranch=new Branheschema(req.body);
    try {
        const saveBranch=await newBranch.save();
        res.status(200).json(saveBranch);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getBranch",async (req,res)=>{
    const branch =await Branheschema.find();
    res.status(200).send(branch);
})

module.exports=router;
