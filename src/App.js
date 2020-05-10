import React,{ Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
	state = {
		todos : [
			{
				content : 'Reading novel',
				id : 1
			},
			{
				content : 'Hacking',
				id : 2
			}
		]
	}

	deleteTodo = (id) =>{
		const todos = this.state.todos.filter(todo=>{
			return todo.id !== id;
		});

		this.setState({
			todos
		})
	}

	addTodo = (todo) =>{
		todo.id = Math.random() * 100;

		const todos = [...this.state.todos, todo];

		this.setState({
			todos
		})
	}

	render(){
		return (
			<div className="todos-app container">
				<h1 className="center blue-text">Todooz</h1>
				<Todos todos = {this.state.todos} deleteTodo ={this.deleteTodo}/>
				<AddTodo addTodo = {this.addTodo}/>
			</div>
		)
	}
}

export default App;