import mysql from 'mysql2';
import process from 'process';
import dotenv from 'dotenv';

// .env 파일을 읽어서 process.env에 등록
dotenv.config();

export const database = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


