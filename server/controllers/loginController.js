import passport from 'passport';

// localStrategy의 결과를 받아서 처리
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

//
const loginCurrentState = (req, res) => {
    // req.isAuthenticated(): Passport에서 로그인 여부를 판단하는 전용 메서드
    // 나중에 Passport 내부 동작이 바뀌었을 때 인증 여부를 명확하게 표현가능
    // 사용자 정보 사용할 때 -> req.user
    if (req.isAuthenticated()) {
        res.status(200).json({
            "message": "로그인 상태 확인완료",
            "user": {
                id: req.user.id,
                email: req.user.email,
                nick: req.user.nick
            }
        });
    } else {
        res.status(401).json("로그인 상태 확인 불가능");
    }
}

export { loginController, loginCurrentState };