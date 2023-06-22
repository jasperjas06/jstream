import bcrypt from 'bcryptjs'

const saltRound=10;

const hashPassword=async(plainpassword)=>{
    try {
        // const salt=await bcrypt.getSalt(saltRound);
        const salt=await bcrypt.genSalt(saltRound);
        const hash=await bcrypt.hash(plainpassword,salt);
        return hash
    } catch (error) {
        console.log(error.message);
    }
}

const hashValidater = async(plainpassword,hashPassword)=>{
    try {
        const result = await bcrypt.compare(plainpassword,hashPassword);
        return result
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    hashPassword, hashValidater
}