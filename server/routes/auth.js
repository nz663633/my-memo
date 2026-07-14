// auth.js -> 인증 기능 담당(회원가입, 로그인, 로그아웃...)

import express from 'express';
import { loginController, loginCurrentState } from '../controllers/loginController.js';
import registerController from '../controllers/registerController.js';

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/me', loginCurrentState);

export default router;