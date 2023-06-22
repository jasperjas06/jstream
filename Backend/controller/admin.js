import Admin from "../model/admin.js";
import hash from '../middleware/hashpassword.js'
import jwt from "jsonwebtoken";
const Adminreg =async(req,res)=>{
    try {
        const {name,email,password,secretKey}= req.body;
        let Xuser= await Admin.findOne({email:email})
            if(Xuser){
                console.log("Email already Exits");
                return res.status(401).send("Email already Exits")
            }    
            let check_Key=process.env.SECRETKEY;
            if(check_Key!==secretKey){
                return res.send("Wrong Key");
            }
                let hashpassword = await hash.hashPassword(password)
                console.log(hashpassword);
                const newUser= await Admin({
                    name:name,
                    email:email,
                    password:hashpassword,
                    secretKey:secretKey
                })
            
                const result = await newUser.save();
                console.log(result);
            
            return res.send(`Hello ${name}, You have Successfully created your account`)
    } catch (error) {
        console.log(error.message);
    }

}

const Adminlog=async(req,res)=>{
    try {
        const {email,password,secretKey}=req.body;
        let Xuser = await Admin.findOne({email:email})
        if(!Xuser){
            console.log("Invalid Password or Email");
            return res.status(400).send("Invalid User or Password")
        }
        let checkPassword = await hash.hashValidater(password,Xuser.password)
        if(!checkPassword){
            return res.send("Wrong Password");
        }
        let check_Key=process.env.SECRETKEY
        if(check_Key!==secretKey){
            return res.send("Wrong Key");
        }
        let token = jwt.sign({ id: Xuser._id }, process.env.JWT);
        console.log(token);
        res
          .header("token", token)
          .send({ message: "Welcome Admin", token: token });
        
        
    } catch (error) {
        return res.status(400).send("user not found");
    }

}

export default {
    Adminreg,Adminlog
}