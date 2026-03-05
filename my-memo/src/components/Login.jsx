import '../styles/Login.css';
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
            <form>
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
        </>
    )
}

export default Login;