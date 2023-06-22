import express from 'express'
import bodyParser from 'body-parser';
import Dbconfig from './config/Dbconfig.js';
import User from './routers/user.routes.js'
import Admin from './routers/admin.routes.js'
import media from './routers/media.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
dotenv.config()
Dbconfig()


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api',cors(),User)
app.use('/api-admin',cors(),Admin)
app.use('/api-video',media)

const port = process.env.PORT || 2022
app.listen(port,()=>{
    console.log("Server connected")
})