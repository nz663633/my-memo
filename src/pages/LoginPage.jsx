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
                <form className='LoginForm'>
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