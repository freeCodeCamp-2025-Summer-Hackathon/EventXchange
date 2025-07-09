import express from 'express'
import { login, checkSession, logout } from '../controller/session.js';


const router = express.Router()

router.post('/login', login)
router.get('/check', checkSession)
router.post('/logout', logout)

export default router