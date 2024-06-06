import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './auth.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        if (e.target.name == "password") {
            setPassword(e.target.value)
        }
    }

    const userLogin = (e) => {
        e.preventDefault();
        let record = JSON.parse(localStorage.getItem("savedUsers"));

        if (record !== false) {
            record.forEach(userData => {
                if (email === userData.email && password === userData.password) {
                    localStorage.setItem("userloginData", JSON.stringify(userData))
                    navigate("/profile")
                }
            });
        }
    }

    return (
        <div>
            <div className="center w70">
                <div className="section">
                    <div className="flex space-btwn">
                        <div>Logo</div>
                        <div className="text-uppercase fs_7 b">Project</div>
                    </div>

                    <div>
                        <span className="fs9 w7 mt4 ml4 text-uppercase ">Welcome back! Log in to continue.</span>
                    </div>
                    <div className="mt4 flex space-between p4">
                        <div className="w50">
                            <div className="mt4">
                                <div>
                                    <label className="label-text">Email</label>
                                </div>
                                <input className="input-box"
                                    name="email"
                                // value=""
                                onChange={handleLogin}
                                />
                            </div>
                            <div className="mt4">
                                <div>
                                    <label className="label-text">Password</label>
                                </div>
                                <input className="input-box"
                                    name="password"
                                    type='password'
                                // value=""
                                onChange={handleLogin}
                                />
                            </div>
                            <div className="mt4">
                                <button
                                    className='btn_register'
                                onClick={userLogin}
                                >
                                    Login
                                </button>
                            </div>
                            <div className='mt4'>
                                <p>Don't have an account? <Link className='links' to="/register">Register here</Link> </p>
                            </div>
                            <div className='mt4'>
                                <p>Forget pas <Link className='links' to="/register">Register here</Link> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;