import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
    const{userLogin}= useContext(AuthContext)
    const hendelSubmitLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        userLogin(email,password)
        .then(result=>{
            const user= result.user
            console.log(user);
        })
        .catch(error=>console.error('error',error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendelSubmitLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                name='email'
                                placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                name='password'
                                placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to="../resister" className="label-text-alt link link-hover">New to this Website? Resister</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;