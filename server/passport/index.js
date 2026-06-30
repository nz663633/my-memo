// passport에 어떤 인증 방식을 사용할지 등록

import { localStrategy } from "./localStrategy.js";
import { findUserByEmail, findUserById } from "../models/userModels.js";
import passport, { serializeUser, deserializeUser, use } from "passport";

passport.use(passport.localStrategy())
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    
});
