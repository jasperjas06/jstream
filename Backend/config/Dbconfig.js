import mongoose from "mongoose";

const Dbconfig = async() => {
    try {
        // await mongoose.connect('mongodb://localhost/CODISS')
        await mongoose.connect('mongodb+srv://Jas-13:123@jasper.cclnzjl.mongodb.net/CODISS?retryWrites=true&w=majority')
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default Dbconfig;