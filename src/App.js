import React, { Component } from 'react';
import './App.css';
import TopHeader from './TopHeader/TopHeader';
import MainContainer from './mainContainer/mainContainer';

class App extends Component {
  render() {
		return (
			<div className="App">
				<TopHeader />
				<MainContainer />
			</div>
		);
	}
}

export default App;  
