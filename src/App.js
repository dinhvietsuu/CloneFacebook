/** @format */

// import React, { useState } from "react";
import "./Sass/App.scss";
// import LoginHeader from "./components/Login/LoginHeader";
import Home from "./components/Home/Home";
import LoginHeader from "./components/Login/LoginHeader";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
	// const [success, setSuccess] = useState(false);
	// const handleSuccess = () => {
	// 	setSuccess(!success);
	// };
	return (
		<div className='wrapper'>
			{/* {!success ? (
				<LoginHeader success={success} handleSuccess={handleSuccess} />
			) : (
				{
					/* <Home /> */}
			{/* )}} */}
			{/* <Home /> */}
			<LoginHeader />
		</div>
	);
}

export default App;
