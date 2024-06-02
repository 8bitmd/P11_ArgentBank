import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {loginUser} from "../../features/authActions";
import {useLocation, useNavigate} from "react-router-dom";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({email, password}, navigate, from));
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button onClick={handleLogin} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};
