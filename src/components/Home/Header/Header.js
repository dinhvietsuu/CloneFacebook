/** @format */

import "./header.css";
import logo from "../../../img/logo.png";
function Header() {
	return (
		<div className='header'>
			<img src={logo} alt='logo' />
			<input type='text' placeholder='Tìm kiếm trên Facebook' />
		</div>
	);
}

export default Header;
