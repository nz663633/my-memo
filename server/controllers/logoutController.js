const logoutController = (req, res) => {
    // 현재 로그인 상태인지 확인
    if (req.isAuthenticated()) {
        // passport에게 현재 로그인 정보 제거 요청
        req.logout((err) => {
            // 로그아웃 처리 중 오류가 발생하는지 확인
            if (err) {
                return res.status(401).json("로그인 상태 확인 불가능");
            }

            // 오류 발생하지 않았다면 세션 제거
            req.session.destroy((err) => {
                // 세션 제거 중 오류가 발생하는지 확인
                if (err) {
                    return res.status(401).json("세션 제거 중 오류 발생");
                }
                // 응답
                res.status(200).json("로그아웃 성공");
            });
        });
    } else {
        res.status(403).json("이미 로그아웃 상태입니다.");
    }
}

export default logoutController;