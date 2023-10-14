const router=require("express").Router();
const Anounceschema = require("../Schema/Anounce");

router.post("/addAnounce",async(req,res)=>{
    const newAnounce=new Anounceschema(req.body);
    try {
        const isAnounceExist = await Anounceschema.find()
        if(isAnounceExist.length==0){
            const saveAnounce=await newAnounce.save();
            res.status(200).json(saveAnounce);
        }
        if(isAnounceExist.length>0){
            await Anounceschema.deleteMany({});
            const saveAnounce=await newAnounce.save();
            res.status(200).json(saveAnounce);
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/getAnounce",async (req,res)=>{
    const anounce =await Anounceschema.find();
    res.status(200).send(anounce);
})

module.exports=router;