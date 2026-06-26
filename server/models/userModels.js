// User 테이블의 조회 및 저장 기능을 담당

import { database } from '../db.js';

// 이메일 조회
// Controller가 await로 사용할 수 있도록 Promise를 반환한다.
export const findUserByEmail = (email) => {
    // resolve: 성공값 전달, reject: catch로 전달
    return new Promise((resolve, reject) => {
        database.query(
            // 전달받은 이메일과 일치하는 회원 조회
            `SELECT * FROM user WHERE email = ?`,
            [email],
            (err, result) => {
                if (err) { // 오류발생하면 Promise를 실패 상태로 반환
                    return reject(err);
                }
                // 조회 성공하면 Promise를 성공 값으로 반환
                return resolve(result);
            }
        )
    }
    )
}

// 회원정보를 DB에 저장
// Controller가 await로 사용할 수 있도록 Promise를 반환한다.
export const createUser = (nick, email, hashedPassword) => {
    const sql = `
                INSERT INTO user (nick, email, password)
                VALUES (?, ?, ?);
            `;
    // resolve: 성공값 전달, reject: catch로 전달
    return new Promise((resolve, reject) => {
        database.query(sql, [nick, email, hashedPassword],
            (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            })
    })
}