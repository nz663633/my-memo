// 사용자가 작성한 메모를 받아서 Model에 전달

import { createMemo, getMemos } from "../models/memoModels.js";

const memoCreateController = async (req, res, next) => {
    try {
        const result = await createMemo(
            // req.user는 인증 미들웨어가 로그인한 사용자의 회원 정보를 임시로 저장
            req.user.id,
            // req.body는 클라이언트가 요청 본문에 담아 보낸 데이터 값
            req.body.title,
            req.body.content
        );
        res.status(201).json({
            "memo": {
                // result는 memoModels.js의 createMemo()에서
                // database.query()를 실행한 후 전달받은 DB 실행 결과 객체
                // insertId는 mysql2가 INSERT된 AUTO_INCREMENT의 ID를 저장하는 속성
                id: result.insertId, // memo.id
                title: req.body.title,
                content: req.body.content
            }
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}

const memoSearchController = async (req, res, next) => {
    try {
        const result = await getMemos(req.user.id);
        res.status(200).json({
            // 현재 로그인한 사용자가 작성한 메모 전체를 조회하므로
            // 조회 결과인 result 자체를 반환
            "memos": result
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}

export { memoCreateController, memoSearchController };