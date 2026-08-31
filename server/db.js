import express from 'express';
import mysql from 'mysql2';
import process from 'process';
import dotenv from 'dotenv';

const app = express(); // express 서버 객체 생성

// .env 파일을 읽어서 process.env에 등록
dotenv.config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

export const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


