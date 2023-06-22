import express from 'express'
import Admin from '../controller/admin.js'
import auth from '../middleware/auth.js'
const router = express.Router();

// Admin
router.post('/admin-reg',Admin.Adminreg)
router.post('/admin-log',Admin.Adminlog)
export default router;