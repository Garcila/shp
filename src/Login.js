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
		if (
			password.length >= 8 &&
			password.length <= 24
			// &&
			// name.length >= 8 &&
			// name.length <= 24
		) {
			this.setState({ loading: true });
			setTimeout(e => {
				this.props.logIn();
			}, 2000);
		} else {
			// if (this.state.password.length >= 8 && password.length <= 24) {
			// 	this.setState({ nameOK: false });
			// } else {
			this.setState({ passOk: false });
			// }
		}
	};

	handleNameChange = e => {
		const name = e.target.value;
		this.setState({ name });
	};

	handlePasswordChange = e => {
		const password = e.target.value;
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
							className="form-username"
							placeholder="username"
							onChange={this.handleNameChange}
							value={this.state.value}
							required
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
							required
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
