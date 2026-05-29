import Header from '../components/Header';
import '../styles/RegisterPage.css'
import { useState } from "react";

const RegisterPage = () => {
    const [nick, setNick] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeNick = (e) => {
        setNick(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const verifyEmail = (e) => {
        e.preventDefault(); // 페이지의 새로고침 막기(새로고침은 브라우저의 기본행동)
        // DB에 회원가입 정보를 저장하는 서버 API 주소
        // 5173 -> 화면 담당 프론트 주소
        // 5000 -> DB 담당 백엔드 주소
        fetch('http://localhost:5000/api/auth/register', // 해당 api 주소로 닉네임, 이메일, 비밀번호 보내기
            {
                body: JSON.stringify( // 서버로 보낼 실제 데이터(JSON 문자열로 변환해서 전송할 것)
                    {
                        nick: nick,
                        email: email,
                        password: password
                    }),
                method: 'POST', // 요청방식 POST (새 데이터를 생성하기 위해)
                headers: {'Content-Type': 'application/json'} // JSON 형식으로 데이터 보낸다고 서버에 알려줌
            });
    };

    return (
        <>
            <div className='RegisterPage'>
                <Header />
                <form className='RegisterForm' onSubmit={verifyEmail}>
                    <input
                        type="text"
                        value={nick}
                        placeholder='닉네임 입력'
                        onChange={onChangeNick}></input>
                    <input
                        type="email"
                        value={email}
                        placeholder='이메일 입력'
                        onChange={onChangeEmail}></input>
                    <div className='password-row'>
                        <input
                            type="password"
                            value={password}
                            placeholder='비밀번호 입력'
                            onChange={onChangePassword}></input>
                        <button type="submit">
                            회원가입 완료
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;