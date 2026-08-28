// Controller로부터 받은 데이터를 SQL 형태로 만들어서 DB에 저장

import { database } from "../db.js";

// 메모 생성 후 DB에 저장
export const createMemo = (user_id, title, content) => {
    const sql = `
                INSERT INTO memo (user_id, title, content)
                VALUES (?, ?, ?);
                `;
    return new Promise((resolve, reject) => {
        database.query(sql, [user_id, title, content],
            (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            }
        )
    })
}

// 메모 조회(현재 로그인한 계정이 작성한 메모 조회)
export const getMemos = (user_id) => {
    const sql = `
                SELECT * FROM memo
                WHERE user_id = ?;
                `;
    return new Promise((resolve, reject) => {
        database.query(sql, [user_id],
            (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            }
        )
    })
}

// 메모 삭제(현재 로그인한 계정이 작성한 메모 삭제)
export const deleteMemo = (id, user_id) => {
    const sql = `
                DELETE FROM memo
                WHERE id = ?
                AND user_id = ?;
                `;
    return new Promise((resolve, reject) => {
        database.query(sql, [id, user_id],
            (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            }
        )
    })
}

// 메모 수정(목록에 있는 메모 수정)
export const updateMemo = (title, content, id, user_id) => {
    const sql = `
                UPDATE memo
                SET title = ?, content = ?
                WHERE id = ?
                AND user_id = ?;
                `;
    return new Promise((resolve, reject) => {
        database.query(sql, [title, content, id, user_id],
            (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            }
        )
    })
}