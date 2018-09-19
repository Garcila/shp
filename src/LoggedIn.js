import React, { Component } from 'react';
import './css/LoggedIn.css';

export default class LoggedIn extends Component {
	render() {
		return (
			<section className="logged-in-container">
				<div className="success-log">
					<h2 className="congratulations">Congratulations</h2>
					<p className="success-log-sentence">
						You have successfully logged in.
					</p>
				</div>
				<button
					onClick={this.props.logOut}
					className="sign-out-button"
					type="submit"
				>
					sign out
				</button>
			</section>
		);
	}
}
