// app.js -> 서버 전체 설정 담당

// ES Module 방식이므로 import 사용
// CommonJS 방식일 경우 require 사용
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { database } from './db.js';
import passport from 'passport';

import router from './routes/auth.js';
import './passport/index.js';
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

// Express 요청: 
// 브라우저 → express.json() → cookieParser() → session()
// → passport.initialize() → passport.session() → router

// 요청(Request)의 JSON 데이터를 JavaScript 객체로 변환
// req.body를 사용할 수 있게 해주는 미들웨어
app.use(express.json());

// 브라우저가 보낸 쿠키를 읽어서 req.cookies에 저장
app.use(cookieParser());

// 사용자마다 세션을 관리하도록 미들웨어 session() 설정
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET, // 세션 쿠키가 위조되지 않았는지 확인하는 키
    cookie: {
        httpOnly: true, // js에서 cookie의 접근 막음(보안강화)
        secure: false // https 적용 관련
    }
}));

// passport 미들웨어는 항상 express session 미들웨어 바로 아래에 넣어준다

// passport 인증 기능을 사용할 수 있도록 초기화
app.use(passport.initialize());

// 세션에 저장된 사용자 정보를 읽어 req.user에 저장
// 로그인 상태를 유지
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:5173', // 배포시 변경해야함!!!!!!!!!!
    credentials: true
}));

// '/api/auth'요청이 오면 router(auth.js)에게 넘길 것
app.use('/api/auth', router);

// 에러처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: "서버 오류가 발생했습니다."
    });
})

// express 서버를 5000번 포트에서 실행
app.listen(5000, () => {
    console.log('server start');
});
