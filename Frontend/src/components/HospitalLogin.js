import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../allcss/Login.css';

const HospitalLogin = () => {
	//react states
	const [errorMessages, setErrorMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const history = useHistory();

	//hospital login info
	const database = [
		{
			email: "mc@gmail.com",
			password: "mc12345",
			confirmPass: ""
		},
		{
			email: "admin@admin.com",
			password: "admin12345",
			confirmPass: ""

		},
	];

	//errors
	const errors = {
		hemail: "Invalid email",
		pass: "Invalid password",
		confirmPass: "Password don't match"
	};

	//to handle on submit event
	const handleSubmit = (e) => {
		//prevent the page reload
		e.preventDefault();

		var { hemail, pass, confirmPass } = document.forms[0];
		//forms retrives the collection of all form object in source order

		//find hospital login
		const data = database.find((user) => user.email === hemail.value);

		// Compare user info
		if (data) {
			if (data.password !== pass.value) {
				// Invalid password
				setErrorMessages({ name: "pass", message: errors.pass });
			} else {
				if (data.password !== confirmPass.value) {
					setErrorMessages({ name: "confirmPass", message: errors.confirmPass });
				}
				else {
					setIsSubmitted(true);
				}

			}
		} else {
			// Username not found
			setErrorMessages({ name: "hemail", message: errors.hemail });
		}
	}

	// Generate JSX code for error message
	const renderErrorMessage = (name) =>
		name === errorMessages.name && (
			<div className="error">{errorMessages.message}</div>
		);

	// JSX code for login form
	const renderForm = (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<div className="input-container">
					<label>Email </label>
					<input type="text" name="hemail" required />
					{renderErrorMessage("hemail")}
				</div>
				<div className="input-container">
					<label>Password </label>
					<input type="password" name="pass" required />
					{renderErrorMessage("pass")}
				</div>
				<div className="input-container">
					<label>Confirm Password </label>
					<input type="password" name="confirmPass" required />
					{renderErrorMessage("confirmPass")}
				</div>

				<div className="button-container">
					<input type="submit" />

				</div>

			</form>
		</div>
	);

	return (<>
		<div className="menuBar">
			<ul>
				<li class="active"><a href="/">Home</a></li>
			</ul>
		</div>
		<div className="menuBar"></div>
		<div className="app">
			<div className="login-form">
				<div className="title">LogIn</div>
				{/* 				{isSubmitted ? <div>User is successfully logged in</div> : renderForm}
 */}
				{isSubmitted ? history.push("/hospital/service") : renderForm}

			</div>
		</div>
	</>


	)
}
export default HospitalLogin;