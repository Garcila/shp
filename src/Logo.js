import React, { Component } from 'react';
import './css/Logo.css';
import logo from './images/logo-acmestack.svg';

export default class Logo extends Component {
	render() {
		return (
			<div className="logo-container">
				<div>
					<h2 className="company-name">AcmeStack</h2>
					<div className="container-logo-shadow">
						<div className="outer-logo">
							<img className="logo" src={logo} alt="logo" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
