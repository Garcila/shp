import React, { Component } from 'react';
import './css/App.css';

import Logo from './Logo';
import Login from './Login';
import LoggedIn from './LoggedIn';

class App extends Component {
	state = {
		loggedIn: false
	};

	logIn = () => {
		this.setState({ loggedIn: true });
	};

	logOut = () => {
		this.setState({ loggedIn: false });
	};

	render() {
		const { loggedIn } = this.state;
		return (
			<div className={`App ${this.state.loggedIn ? 'loggedOk' : ''}`}>
				{loggedIn ? (
					<LoggedIn logOut={this.logOut} />
				) : (
					<Login logIn={this.logIn} />
				)}
				<Logo />
			</div>
		);
	}
}

export default App;
