import express from 'express'
import User from '../controller/users.js'
import auth from '../middleware/auth.js';
const router = express.Router();



// User
router.post('/reg',User.register);
router.post('/log',User.log)
router.post('/addplan',auth,User.addplan)
router.get('/token',auth,User.getToken)

export default router;