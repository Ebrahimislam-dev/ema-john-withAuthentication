import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex align-items-center justify-content-center container">
            <div>
                <div className="text-center">
                    <h2>Create An Account</h2>
                    <form onSubmit="">
                        <input type="text" name="" id="" placeholder="Enter Your Name" />
                        <br /> <br />
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br /> <br />
                        <input type="password" name="" id="" placeholder=" Your password" />
                        <br /> <br />
                        <input type="password" name="" id="" placeholder="Re Enter your password" />
                        <br /> <br />
                        <input className="bg-success" type="submit" value="Submit" />

                    </form>
                    <p>Already Have an Account? <Link to="/login">Login</Link></p>
                </div>
                <div className="text-center">
                    <h4>-----------------------------OR Register Using-------------------------- </h4>
                    <button className="btn-regular text-center">Google</button>
                </div>

            </div>

        </div>
    );
};

export default Register;