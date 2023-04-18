const express =require("express")
const router =express.Router();
const User =require("./models/users")


router.get("/",async(req,res)=>{
    const users =await User.findALL()        
    res.send(users)
});

router.post("/",async(req,res)=>{
    const users =await User.create({
        name: req.body.email,
    })
});

router.patch("/",async(req,res)=>{
    const users =await User.update({emai:"lila2002@gmail.com"},{
        where:{
            username:"mona"
        }
    })
});

router.delete("/",async(req,res)=>{
    const users = await User.destroy({
        where: {
         username: "Jane"
        }
      });
});

module.exports=router;