// email을 받으면 DB에서 해당 회원을 찾아 결과를 반환해줌
// 여기서는 오직 이메일 조회만 한다.

import { database } from '../db.js';

// Controller가 await로 사용할 수 있도록 Promise를 반환한다.
const findUserByEmail = (email) => {
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
export default findUserByEmail;