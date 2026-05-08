// auth.js -> 인증 기능 담당(회원가입, 로그인, 로그아웃...)

import express from 'express';
import loginRouter from '../controllers/login';
import registerRouter from '../controllers/register';

const router = express.Router();

router.post('/login', loginRouter);
router.post('/register', registerRouter);

export default router;