import React, { useRef } from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {

    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("");
    const password = useRef("");
    const confirmPassword = useRef("");

    const onButtonClick = () => {
        if(firstName.current.value === "" || lastName.current.value === "" || email.current.value === "" || password.current.value === "" || confirmPassword.current.value === ""){
            return window.alert('Vui long nhap day du thong tin')
        }
        if(password.current.value === confirmPassword.current.value && password.current.value !== "" && confirmPassword.current.value !== ""){
            return window.alert('ok')
        }
    }

    return (
        <div className="signup-form">
            <h2>Đăng ký</h2>
            <form>
            <label>Tên</label>
            <input ref={firstName} type="text" /> <br />
            <label>Họ</label>
            <input ref={lastName} type="text" /><br />
            <label>Email</label>
            <input ref={email} type="text" /><br />
            <label>Mật khẩu</label>
            <input ref={password} type="password" /><br />
            <label>Nhập lại mật khẩu</label>
            <input ref={confirmPassword} type="password" /><br />
            <button onClick={onButtonClick}>Đăng ký</button>
            </form>
            <Link to="/log-in">
                Đã có tài khoản?
            </Link>
        </div>
    );
};

export default Signup;