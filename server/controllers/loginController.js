import passport from 'passport';

// localStrategy의 인증 결과를 받아 로그인 성공/실패 처리
// next: 다음 미들웨어에게 작업을 넘겨라
const loginController = (req, res, next) => {
    // 해당 요청에 대해 'local'이라는 인증 방식을 사용할 것
    // user는 로그인(인증) 성공시 전달되는 사용자 객체
    // info는 로그인(인증) 실패시 done()의 세 번째 인자로 전달되는 추가 정보
    passport.authenticate('local', (err, user, info) => { // localStrategy에서 done이 실행됐을 때
        if (err) { // 인증 과정 중 발생한 서버 오류
            console.log(err);
            return next(err);
            // return res.status(401).json("오류가 발생했습니다.");
        }
        if (!user) { // 인증 실패 (사용자 없음, 비밀번호 불일치 등)
            if (info) { // LocalStrategy의 done()에서 전달한 실패 정보가 있는 경우
                return res.status(401).json({
                    message: info.message
                })
            }
            // LocalStrategy의 done()에서 전달한 실패 정보가 없는 경우
            return res.status(401).json({
                message: "오류가 발생했습니다."
            })
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

// 로그인 현재 상태 확인
const loginCurrentState = (req, res) => {
    // req.isAuthenticated(): Passport에서 로그인 여부를 판단하는 전용 메서드(인증 상태 확인)
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