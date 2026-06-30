// bcrypt: 비밀번호 암호화 라이브러리
// 사용자가 입력한 암호 -> 그대로 저장하지 않고 암호화해서 저장
import bcrypt from 'bcrypt';
import { findUserByEmail, createUser } from '../models/userModels.js';

const registerController = async (req, res) => {
    // 프론트에서 사용자로부터 입력받은 값 꺼내기
    const { nick, email, password } = req.body;

    // 빈 값 있는지 확인
    // 옵셔널 체이닝: nick, email이 존재하면 trim() 실행, 없으면 undefined 반환(에러 X)
    if (!nick?.trim() || !email?.trim() || !password)
        return res.status(400).json("입력값이 비어있습니다.");

    // 중복된 이메일인지 확인 -> 중복되지 않으면 회원가입
    try {
        const result = await findUserByEmail(email);
        // 옵셔널 체이닝: 배열 result에 데이터가 1개라도 있으면 length 확인, 없으면 undefined
        if (result?.length > 0) { 
            return res.status(409).json("이미 가입된 이메일입니다.");
        }

        // 비밀번호 암호화(bcrypt)
        // bcrypt.hash(원본 비밀번호, salt rounds - 암호화를 얼마나 복잡하게 할지)
        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser(nick, email, hashedPassword); // 끝날 때까지 기다림, 반환값 안받음

        return res.status(201).json("회원가입이 완료되었습니다.");

    } catch (err) {
        console.log("register error: ", err);
        return res.status(500).json("회원가입 처리에 실패했습니다. 다시 시도하세요.");
    }

}

export default registerController;