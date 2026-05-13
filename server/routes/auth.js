// auth.js -> 인증 기능 담당(회원가입, 로그인, 로그아웃...)

import express from 'express';
import loginRouter from '../controllers/login.js';
import registerRouter from '../controllers/register.js';

const router = express.Router();

router.post('/login', loginRouter);
router.post('/register', registerRouter);

export default router;