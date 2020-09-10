import React, {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import {auth} from "../../firebase";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className={"login"}>
            <Link to={"/"}><img className={"login__logo"}
                                src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
                                alt=""/></Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button type={"submit"} onClick={signIn} className={"login__signInButton"}>Sign in</button>
                </form>
                <p>
                    By singing-in you agree to AMAZON FAKE CLONE's Conditions of Use & Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button onClick={register} className={"login__registerButton"}>Create your amazon account</button>
            </div>
        </div>
    )
}
export default Login;