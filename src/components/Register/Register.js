/** @format */

import React from "react";
import { Day, Month, Year } from "./Option";
function Register({ showRegister, onClose }) {
	return showRegister ? (
		<div className='modal'>
			<div className='modal-box'>
				<div className='modal-top container'>
					<h2>Đăng kí</h2>
					<span
						onClick={() => onClose(showRegister)}
						className='close'>
						&times;
					</span>
				</div>
				<hr></hr>
				<div className='info container'>
					<input type='text' placeholder='Họ' />
					<input type='text' placeholder='Tên' />
				</div>
				<div className='account container'>
					<input type='text' placeholder='Mời bạn nhập email' />
					<input type='password' placeholder='Nhập password' />
				</div>
				<div className='birthday container'>
					<h3>Sinh nhật</h3>
					<div className='select'>
						<select className='select' name='day'>
							<Day />
						</select>
						<select className='select' name='day'>
							<Month />
						</select>
						<select className='select' name='day'>
							<Year />
						</select>
					</div>
				</div>
				<div className='sexs container'>
					<h3>Giới tính</h3>
					<div className='sex'>
						<span className='female match'>
							<label htmlFor='female'>Nữ</label>
							<input type='radio' name='sex' id='female' />
						</span>
						<span className='male match'>
							<label htmlFor='male'>Nam</label>
							<input type='radio' name='sex' id='male' />
						</span>
						<span className='lgbt match'>
							<label htmlFor='lgbt'>LGBT</label>
							<input type='radio' name='sex' id='lgbt' />
						</span>
					</div>
				</div>
				<span className='container text'>
					Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính
					sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể
					nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ
					lúc nào.
				</span>
				<div className='register container'>
					<button>Đăng kí</button>
				</div>
			</div>
		</div>
	) : (
		""
	);
}

export default Register;
