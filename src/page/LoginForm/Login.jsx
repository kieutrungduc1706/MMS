import React, { useContext, useState } from "react";
import './Login.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import listApi from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { AuthContext } from "../../AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { setUserData } = useContext(AuthContext);
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    }

    const LoginFunc = async(e) => {
        console.log("user_name",username)
        console.log("pass",password)
        e.preventDefault();
           await fetch(listApi.login,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "username" : username,
                        "password" : password,
                    })
                }).then((response) => response.json()

                ).then((response) => {
                    console.log("check: ", response.session_id);
                    if (response.code == 200) {
                        console.log("login thành công")
                        // console.log(response)
                        setUserData(response);
                        navigate('/Home');

                    } else {
                        alert(response.desc)
                    }
                }).catch((error) => {
                    console.log(error)
                });
    }

    const Signup = async(e) => {
        console.log("user_name",username)
        console.log("pass",password)
        e.preventDefault();
           await fetch(listApi.signup,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "username" : username,
                        "fullname": fullName,
                        "password" : password,
                        "email": email,
                    })
                }).then((response) => response.json()

                ).then((response) => {
                    console.log("check: ", response);
                    if (response.code == 200) {
                        alert("Đăng kí thành công")
                        setAction('')
                    } else {
                        alert(response.desc)
                    }
                }).catch((error) => {
                    console.log(error)
                });
    }
    

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form onSubmit={LoginFunc}>
                    <h1>Đăng nhập</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Tài khoản" onChange={e => setUserName(e.target.value)}   />
                        <FaUser className="icon"/>
                    </div>  
                    <div className="input-box">
                        <input type="password" placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)} />
                        <FaLock className="icon"/>
                    </div>
                    {/* <div className="remember-forgot">
                        <label><input type="checkbox" /> Ghi nhớ mật khẩu </label>
                        <a href="!#" >Quên mật khẩu?</a>
                    </div> */}
                    <button type="submit">Đăng nhập </button>
                    <div className="register-link">
                        {/* <p>Nếu bạn chưa có tài khoản? <a 
                        onClick={registerLink}> Đăng ký</a></p> */}
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form onSubmit={Signup}>
                    <h1>Đăng ký</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Tài khoản" onChange={e => setUserName(e.target.value)}  />
                        <FaUser className="icon"/>
                    </div>  
                    <div className="input-box">
                        <input type="text" placeholder="Tên đầy đủ" onChange={e => setFullName(e.target.value)} />
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}  />
                        <FaEnvelope className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)}  />
                        <FaLock className="icon"/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Tôi đông ý với các chính sách và điều khoản</label>
                    </div>
                    <button type="submit" >Đăng ký </button>
                    <div className="register-link">
                        <p>Nếu bạn đã có tài khoản? <a 
                        onClick={loginLink}> Đăng nhập</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login