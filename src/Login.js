import React, { Component } from 'react';
import './css/Login.css';
import facebookLogo from './images/logo-facebook.svg';
import googleLogo from './images/logo-google.svg';
import twitterLogo from './images/logo-twitter.svg';

export default class Login extends Component {
	state = {
		name: '',
		password: ''
	};

	handleSubmit = e => {
		e.preventDefault();
		setTimeout(e => {
			alert(this.state.name);
		}, 3000);
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
		return (
			<div className="login">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<input
						className="form-username"
						placeholder="username"
						onChange={this.handleNameChange}
						value={this.state.value}
					/>
					<input
						className="form-password"
						placeholder="password"
						onChange={this.handlePasswordChange}
					/>
					<button className="form-button" type="submit">
						login
					</button>
				</form>
				<div className="checkbox-remember-me">
					<input
					  className='form-checkbox'
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
