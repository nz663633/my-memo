// app.js -> 서버 전체 설정 담당

// ES Module 방식이므로 import 사용
// CommonJS 방식일 경우 require 사용
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { database } from './db.js';
import passport from 'passport';

import router from './routes/auth.js';
import { register } from 'module';
import session from 'express-session';

const app = express();

// .env 파일을 읽어서 process.env에 등록
dotenv.config();

// Node.js <-> MySQL 연결 확인
database.connect((err) => {
    if (err) {
        console.log("Database connection failed")
    } else {
        console.log("Database connection successful");
    }
});

app.use(express.json());
app.use(cookieParser());

app.use(session());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.listen(5000, () => { // express 서버를 5000번 포트에서 실행
    console.log('server start');
});

// '/api/auth'요청이 오면 router(auth.js)에게 넘길 것
app.use('/api/auth', router);
