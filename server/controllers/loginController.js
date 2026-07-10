// localStrategy의 결과를 받아서 처리
import passport from 'passport';

// next: 다음 미들웨어에게 작업을 넘겨라
const loginController = (req, res, next) => {
    // 해당 요청에 대해 'local'이라는 인증 방식을 사용할 것
    // user는 로그인 성공시 조회한 사용자 객체, info는 로그인에 실패시 부가 정보를 담는 객체
    passport.authenticate('local', (err, user, info) => { // localStrategy에서 done이 실행됐을 때
        if (err) { // 서버실패(+ 인증 과정에서 예외가 발생한 경우)
            console.log(err);
            return next(err);
            // return res.status(401).json("오류가 발생했습니다.");
        }
        if (!user) { // 로직실패
            return res.status(401).json(`${info.message}`)
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({
                message: "로그인에 성공하셨습니다.",
                user: {
                    id: user.id,
                    email: user.email,
                    nick: user.nick
                }
            })
        })
    })(req, res, next);
}

export default loginController;