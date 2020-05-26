import React ,{ Component } from 'react';

import './styles/main.scss';

import TodoApp from './components/TodoApp.js';


class App extends Component{
	render() {
		return (
			<div>
				<TodoApp/>
			</div>
		)
	}
}

export default App;