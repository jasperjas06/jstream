import User from "../model/schema.js";
import hash from '../middleware/hashpassword.js'
import jwt from "jsonwebtoken";
const register =async(req,res)=>{
    try {
        const {name,email,password,phone_no}= req.body;
        let Xuser= await User.findOne({email:email})
            if(Xuser){
                console.log("Email already Exits");
                return res.status(401).send("Email already Exits")
            }
            else{
                let hashpassword = await hash.hashPassword(password)
                const newUser= await User({
                    name:name,
                    email:email,
                    password:hashpassword,
                    phone_no:phone_no
                })
                const result = await newUser.save();
                console.log(newUser);
                return res.send(`Hello ${name}, You have Successfully created your account`)
            }
        
        
    } catch (error) {
        console.log(error.message);
    }

}

const log=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let Xuser = await User.findOne({email:email})
        if(!Xuser){
            console.log("Invalid Password or Email");
            return res.status(400).send("Invalid User or Password")
        }
        let checkPassword = await hash.hashValidater(password,Xuser.password)
        if(!checkPassword){
            return res.send("Wrong Password");
        }
        let token = jwt.sign({ id: Xuser._id,isAdmin:Xuser.isAdmin }, process.env.JWT);
        console.log(token);
        res
          .header("token", token)
          .send({ message: "login successfully", token: token ,isAdmin:Xuser.isAdmin});
        
        
    } catch (error) {
        return res.status(400).send("user not found");
    }

}

const addplan=async(req,res)=>{
    try {
        // const {plan,is}=req.body;
        //         let newuser= await User.updateMany({
        //             isSubscribed:check,
        //             plan:plan
        //         })
        //         const result = await newuser.update()
        //         console.log(result);
        //         return res.send(result)
        let update = await User.findByIdAndUpdate({ _id: req.user.id }, { $set:req.body}, { new: true })
    if (update) {
        try {
            res.send(update)
        } catch (error) {
            res.send(error.message)
        }
    } else {
        res.send("User not found")
    }    
        
    } catch (error) {
        console.log(error.message);
    }
}

const getToken = async (req, res) => {
    try {
        const get = await User.findById({ _id: req.user.id })
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// const getData = async (req,res)=>{
//     try {
//         const get = await User.findOne()
//     } catch (error) {
        
//     }
// }

export default {
    register, log,addplan, getToken
}