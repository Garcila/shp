import React, { Component } from 'react';
import './css/App.css';

import Logo from './Logo';
import Login from './Login';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Login />
				<Logo />
			</div>
		);
	}
}

export default App;
