import { PrismaClient} from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();


router.post("/", async (req, res) => {
    const { username , email ,password_hash } = req.body;
    
    const response = await prisma.user.create ({
        data:{
           username,
           email,
           password_hash

        }
    });

    if (response){       
        res.json({ msg: "Welcome user"});
    }
})

router.get("/",(req,res)=>{

res.json({
    message:"YUP THE SERVER IS LIVE"
})

})



export default router