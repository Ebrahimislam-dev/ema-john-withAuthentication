import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center container">
            <div>
                <div className="text-center">
                    <h2>Log In</h2>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br /> <br />
                        <input type="password" name="" id="" placeholder=" Your password" />
                        <br /> <br />
                        <input type="submit" value="Submit" />

                    </form>
                    <p>New To Ema-John? <Link to="/register">Create an Account</Link></p>
                </div>
                <div className="text-center">
                    <h4>-----------------------------OR Log in Using-------------------------- </h4>
                    <button className="btn-regular text-center">Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;