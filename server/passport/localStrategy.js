// 해당 이메일의 회원을 찾는 파일이기 때문에
// controllers/register.js를 전체 import 할 필요가 없다.
import passport from "passport";
import bcrypt from 'bcrypt';
import { findUserByEmail } from '../models/userModels.js';
import { Strategy as LocalStrategy } from 'passport-local';

const localStrategy = () => {
    // passport.use() 호출하면
    // Passport는 해당 전략을 'local'이라는 이름으로 등록
    passport.use(new LocalStrategy({
        // "local",
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false
    }, async (email, password, done) => { //
        try {
            const exUser = await findUserByEmail(email);
            if (!exUser) { // email 존재 x
                // done(서버실패, 성공유저, 로직실패)
                return done(null, false, { message: '해당 사용자를 찾을 수 없습니다.' })
            }
            // email 존재 o
            const isValidPassword = await bcrypt.compare(password, exUser.password);
            if (isValidPassword) { // email과 password 일치 o
                return done(null, exUser); // 성공 -> loginController로 넘겨줌
            } else { // email과 password 일치 x
                return done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
        } catch (error) {
            console.log("이메일 조회 에러: ", error);
            return done(error);
        }
    }))
};

export default localStrategy;