const express =require("express")
const router =express.Router();
const Posts =require("./models/posts")


router.get("/",async(req,res)=>{
    const posts =await Posts.findALL()         
    res.send(posts)
});

router.post("/",async(req,res)=>{
    const posts =await Posts.create({
        name: req.body.userid,
         
    })
});

router.patch("/",async(req,res)=>{
    const posts =await Posts.update({title:"news"},{
        where:{
            id:1
        }
    })
});

router.delete("/",async(req,res)=>{
    const posts = await Posts.destroy({
        where: {
         userid: 12
        }
      });
});

module.exports=router;