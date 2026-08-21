// 메모 관련 API

import express from 'express';
import { memoCreateController, memoSearchController } from '../controllers/memoController.js';

const memoRouter = express.Router();

// 메모 CRUD
memoRouter.post('/', memoCreateController); // 메모 생성
memoRouter.get('/', memoSearchController); // 메모 조회

export default memoRouter;