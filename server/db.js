import express from 'express';
import mysql from 'mysql2';
import process from 'process';
import dotenv from 'dotenv';

const app = express(); // express 서버 객체 생성

// .env 파일을 읽어서 process.env에 등록
dotenv.config();

export const database = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});


