import React, { Component } from 'react';

import './css/Login.css';

import facebookLogo from './images/logo-facebook.svg';
import googleLogo from './images/logo-google.svg';
import twitterLogo from './images/logo-twitter.svg';

export default class Login extends Component {
	state = {
		name: '',
		password: '',
		loading: false,
		passOk: true,
		nameOk: true
	};

	handleSubmit = e => {
		e.preventDefault();
		let password = this.state.password;
		let name = this.state.name;

		// check length of password and name.  If true proceed
		// with fake server call via setTimeout
		if (
			password.length >= 8 &&
			password.length <= 24 &&
			name.length > 0 &&
			name.length <= 24
		) {
			this.setState({ loading: true });
			setTimeout(e => {
				this.props.logIn();
			}, 2000);
		} else {
			if (this.state.password.length >= 8 && password.length <= 24) {
				this.setState({ nameOk: false, passOk: true });
			} else {
				this.setState({ passOk: false });
			}
		}
	};

	handleNameChange = e => {
		const name = e.target.value;
		this.setState({ name });
	};

	handlePasswordChange = e => {
		const password = e.target.value;

		// give visual information to the user when the length of the
		// password is out of range
		password.length < 8 || password.length > 24
			? this.setState({ passOk: false })
			: this.setState({ passOk: true });
		this.setState({ password });
	};

	render() {
		const validationError = !this.state.passOk ? (
			<div className="error-login">
				password must be between 8 and 24 characters
			</div>
		) : (
			''
		);
		return (
			<div className="login">
				<div className="container-log">
					<form className="login-form" onSubmit={this.handleSubmit}>
						<input
							className={
								this.state.nameOk
									? 'form-username'
									: 'form-username error-name'
							}
							placeholder="username"
							onChange={this.handleNameChange}
							value={this.state.value}
							title="username must be between 8 and 24 characters"
						/>
						<input
							type="password"
							className={
								this.state.passOk
									? 'form-password'
									: 'form-password  error-password'
							}
							placeholder="password"
							onChange={this.handlePasswordChange}
							title="password must be between 8 and 24 characters"
						/>
						<button className="form-button" type="submit">
							{this.state.loading ? (
								<div className="spinner" />
							) : (
								'login'
							)}
						</button>
					</form>
					{/* // show validation error when the password length is out of bounds */}
					{validationError}
				</div>
				<div className="checkbox-remember-me">
					<input
						className="form-checkbox"
						type="checkbox"
						value="None"
						id="remember-me"
						name="check"
					/>
					<label className="label-remember-me" htmlFor="remember-me">
						remember me
					</label>
				</div>
				<div className="alt-login">
					<p>or login with</p>
					<div className="logos">
						<img src={googleLogo} alt="Google Logo" />
						<img src={facebookLogo} alt="Facebook Logo" />
						<img src={twitterLogo} alt="Twitter Logo" />
					</div>
				</div>
			</div>
		);
	}
}
