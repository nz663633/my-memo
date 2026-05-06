import '../styles/Login.css';
import Header from '../components/Header';
import '../styles/LoginPage.css'
import { useState } from "react";

const Login = () => {
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
                        <button type="submit">완료</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;