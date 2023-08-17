import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/LoginPage.css";
import axios from "axios";

const LoginPage = () => {
	const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (key, value) => {
		setLoginDetails((prevState) => ({
			...prevState,
			[key]: value,
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		if (loginDetails.username && loginDetails.password) {
			await axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/login`, loginDetails)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					window.alert("invalid credentials");
				});
		} else {
			window.alert("fill the deatils before submiting the form");
		}
	};

	console.log(loginDetails);

	return (
		<section className="login-page">
			<form onSubmit={(e) => handleLogin(e)} className="login-form">
				<h2 className="headding">Login Here</h2>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" value={loginDetails.username} onChange={(e) => handleInputChange("username", e.target.value)} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<div className="password-input">
						<input type={showPassword ? "text" : "password"} id="password" value={loginDetails.password} onChange={(e) => handleInputChange("password", e.target.value)} />
						<button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
				</div>
				<button type="submit" className="login-button">
					Login
				</button>
			</form>
		</section>
	);
};

export default LoginPage;
