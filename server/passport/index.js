// passport에 어떤 인증 방식을 사용할지 등록

import localStrategy from "./localStrategy.js";
import { findUserById } from "../models/userModels.js";
import passport from "passport";

localStrategy();

passport.serializeUser((user, done) => {
    done(null, user.id); // user.id만 세션에 저장
});
passport.deserializeUser(async (id, done) => {
    try {
        const exUser = await findUserById(id);
        done(null, exUser);
    } catch (error) {
        console.log("id로 DB 조회에 실패: ", error);
        return done(error);
    }
});
