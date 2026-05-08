import Header from '../components/Header';
import '../styles/RegisterPage.css'
import { useState } from "react";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className='RegisterPage'>
                <Header />
                <form className='RegisterForm'>
                    <input
                        type="email"
                        value={email}
                        onChange={onChangeEmail}></input>
                    <div className='password-row'>
                        <input
                            type="password"
                            value={password}
                            onChange={onChangePassword}></input>
                        <button type="submit">회원가입 완료</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;