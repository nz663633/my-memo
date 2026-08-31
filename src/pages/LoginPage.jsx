import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Header from '../components/Header';
import '../styles/LoginPage.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateRegister = () => {
        navigate('/register');
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <div className='LoginPage'>
                <Header />
                <form
                    className='LoginForm'
                    onSubmit={async (e) => {
                        e.preventDefault();

                        if (!email || !password) {
                            alert("이메일과 비밀번호를 입력하세요.");
                            return;
                        }

                        const loginRes = await fetch('https://my-memo-production.up.railway.app/api/auth/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'include', // 쿠키를 함께 전송, 서버가 준 쿠키도 저장
                            body: JSON.stringify({
                                "email": email,
                                "password": password
                            })
                        })
                        if (loginRes.status === 200) {
                            navigate('/MyPage');
                        } else {
                            const data = await loginRes.json();
                            alert(data.message);
                        }
                    }}>
                    <input
                        type="email"
                        value={email}
                        onChange={onChangeEmail}></input>
                    <div className='password-row'>
                        <input
                            type="password"
                            value={password}
                            onChange={onChangePassword}></input>
                        <button className="submitButton" type="submit">완료</button>
                        <button className="registerButton"
                            type="button" onClick={navigateRegister}>
                            회원가입
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage;         