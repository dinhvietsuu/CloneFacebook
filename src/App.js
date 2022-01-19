/** @format */

import React, { useState } from "react";
import "./App.css";
import LoginHeader from "./components/Login/LoginHeader";
import Home from "./components/Home/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
	const [login, setLogin] = useState(false);
	return (
		<div className='wrapper'>
			{login ? <Home /> : <LoginHeader login={login} />}
		</div>
	);
}

export default App;
