const router=require("express").Router();
const Eventschema=require("../Schema/Event");

router.post("/addevent",async (req,res)=>{
    const newevent= new Eventschema(req.body);
    try {
        const saveEvent = await newevent.save();
        res.status(200).json(saveEvent);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("getevent",async (req,res)=>{
    const event = await Eventschema.find();
    res.status(200).send(event);
})

module.exports=router;
