import jwt from "jsonwebtoken";

function auth(req,res,next){
    const adminAuth=req.header('Token')
    if(!adminAuth){
        return res.status(401).send("Access Denied")
    }
    try {
        const decode=jwt.verify(adminAuth,process.env.JWT)
        req.user=decode
        console.log(req.user)
        next()
    } catch (error) {
        console.log(error.message);
       res.status(400).send("Invalid token"+error.message) 
    }
}
export default auth