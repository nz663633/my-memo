// bcrypt: 비밀번호 암호화 라이브러리
// 사용자가 입력한 암호 -> 그대로 저장하지 않고 암호화해서 저장
import bcrypt from 'bcrypt';
import { database } from '../db.js';
import { json } from 'express';
import { data } from 'react-router-dom';

const register = async (req, res) => {
    // 프론트에서 사용자로부터 입력받은 값 꺼내기
    const { nick, email, password } = req.body;

    // 빈 값 있는지 확인
    if (!nick || !email || !password)
        return res.status(400).json("입력값이 비어있습니다.");

    // 중복된 이메일인지 확인
    database.query(
        `SELECT * FROM user WHERE email = ?`,
        [email],
        async (err, result) => {
            if (err) {
                return res.status(500).json("이메일 중복 조회에 실패했습니다.");
            } else if (result.length > 0) {
                return res.status(409).json("이미 가입된 이메일입니다.");
            }

            // 비밀번호 암호화(bcrypt)
            // bcrypt.hash(원본 비밀번호, salt rounds - 암호화를 얼마나 복잡하게 할지)
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(nick, email, password);
            console.log(hashedPassword);

            const sql = `
                INSERT INTO user (nick, email, password)
                VALUES (?, ?, ?);
            `;

            database.query(sql, [nick, email, hashedPassword],
                (err, result) => {
                    if (err) {
                        return res.status(500).json("회원가입에 실패했습니다.");
                    }

                    return res.status(201).json("회원가입이 완료되었습니다.");
                });
        })





    // DB에 nick, email, password 저장(위의 조건 검증 후, hashedPassword로 저장)

    // 성공 응답 서버에 보내기
}

export default register;