import React,{ useState } from 'react'
import DisplayTodos from './DisplayTodos.js';
import AddTodo from './AddTodo.js';


const TodoApp = () => {
	const [todos, setTodos] = useState([
		{
			todo : 'Reading',
			task : 'The Alchemist',
			id : Math.floor(Math.random() * 10000000),
			finished : false
		},
		{
			todo : 'Coding',
			task : 'Clone Youtube',
			id : Math.floor(Math.random() * 10000000),
			finished: false
		},
		{
			todo : 'Nihongo',
			task : '100 Kanjis',
			id : Math.floor(Math.random() * 10000000),
			finished : false
		}
	])

	const deleteTodo = (item) =>{
		const renew = todos.filter(i=>{
			return i.id !== item.id
		})

		setTodos(renew);
	}

	// Coret todo yang sudah selesai 
	const finishedTodo = (item) =>{
		item.finished = true;
		
		const renew = [...todos];

		setTodos(renew);
	}

	const addTodo = (item) =>{
		item.id = Math.floor(Math.random() * 10000000);

		const renew = [...todos, item];

		setTodos(renew);
	}


	return (
		<div className = "todo-app">
			<h1 className="title">ToDoo</h1>
			<div className="container">
				<AddTodo addTodo = {addTodo}/>
				<DisplayTodos todos = {todos} finishedTodo = {finishedTodo} deleteTodo = {deleteTodo}/>
			</div>
		</div>
	)
}

export default TodoApp