// app.js -> 서버 전체 설정 담당

// ES Module 방식이므로 import 사용
// CommonJS 방식일 경우 require 사용
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import router from './routes/auth';

const app = express();

// '/api/auth'요청이 오면 router(auth.js)에게 넘길 것
app.use('/api/auth', router);