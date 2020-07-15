import React, { useRef } from 'react';
import {Link, Redirect} from 'react-router-dom';
import data from '../API/data';

const Login = () => {
    const email = useRef("");
    const password = useRef("");
    const onButtonClick = () => {
        if(email.current.value === "" || password.current.value === ""){
            return window.alert('Vui long nhap email va mat khau')
        }
        else{
            if(email.current.value === data.email && password.current.value === data.password){
                window.alert('Dang nhap thanh cong');
                return <Redirect path='/' />
            }
        }
    };

    return (
        <div className="login-form">
            <h2>Đăng nhập</h2>
            <form>
            <label>Email</label>
            <input ref={email} type="text" /> <br />
            <label>Mật khẩu</label>
            <input ref={password} type="password" /><br />

            <button onClick={onButtonClick}>Đăng nhập</button>
            </form>
            <Link to="/sign-up">
                Chưa có tài khoản?
            </Link>
        </div>
    );
};

export default Login;