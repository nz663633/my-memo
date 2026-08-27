// 메모 관련 API

import express from 'express';
import { memoCreateController, memoDeleteController, memoSearchController } from '../controllers/memoController.js';

const memoRouter = express.Router();

// 메모 CRUD
memoRouter.post('/', memoCreateController); // 메모 생성
memoRouter.get('/', memoSearchController); // 메모 조회
// :는 url의 해당 부분을 동적인 경로 파라미터로 지정하는 표시
// :id에 전달된 값은 req.params.id로 가져올 수 있음
memoRouter.delete('/:id', memoDeleteController); // 메모 삭제

export default memoRouter;