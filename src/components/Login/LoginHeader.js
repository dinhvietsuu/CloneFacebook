/** @format */

import React, { useState } from "react";
import "./loginHeader.css";
import Register from "../Register/Register";

function LoginHeader({ login }) {
	const [showRegister, setShowRegister] = useState(false);
	const [signUp, setSignUp] = useState(login);
	console.log(signUp);
	const handleRegister = () => {
		setShowRegister(!showRegister);
	};
	const handleClick = (e) => {
		e.preventDefault();
		setSignUp(true);
	};
	return (
		<>
			<div className='login'>
				<div className='login__left'>
					<img
						src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
						alt='logo'
					/>
					<h1>
						Facebook giúp bạn kết nối và chia sẻ với mọi người trong
						cuộc sống của bạn.
					</h1>
				</div>
				<div className='login__right'>
					<form action=''>
						<input
							type='text'
							placeholder='Email hoặc số điện thoại'
							required
						/>
						<input
							type='password'
							placeholder='Mật khẩu'
							required
						/>
						<button
							className='btnlogin'
							onClick={() => handleClick(login)}>
							Đăng Nhập
						</button>
						<a className='link' href='# '>
							Quên mật khẩu?
						</a>
						<hr />
						<button
							className='btnregister'
							onClick={handleRegister}>
							Tạo mới tài khoản
						</button>
					</form>
					{showRegister ? (
						<Register
							showRegister={showRegister}
							onClose={handleRegister}
						/>
					) : (
						""
					)}
					<h2>
						Tạo Trang dành cho người nổi tiếng, thương hiệu hoặc
						doanh nghiệp.
					</h2>
				</div>
			</div>
		</>
	);
}

export default LoginHeader;
