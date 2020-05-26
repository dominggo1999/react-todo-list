import React,{ useState } from 'react'

const AddTodo = ({ addTodo }) => {

	const [todo, setTodo] = useState('');
	const [task, setTask] = useState('');
	const [content, setContent] = useState({
		todo : '',
		task : ''
	});

	const handleTodoChange = (e) =>{
		setTodo(e.target.value);
	}

	const handleTaskChange = (e) =>{
		setTask(e.target.value);
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		const todoObj ={
				todo : todo,
				task : task
		}

		if(todoObj.todo !== "" && todoObj.task !== ""){
			addTodo(todoObj);
			setTodo('');
			setTask('');
		}
	}

	return (
		<div className = "add-todo">
			<form onSubmit= {handleSubmit}>
				<label htmlFor="">Todo name</label>
				<input 
					type="text"
					value = {todo}
					onChange = {handleTodoChange}
					placeholder = 'Ex : Coding For Life' 
				/>
				<label htmlFor="">Task</label>
				<input 
					type="text"
					value = {task}
					onChange = {handleTaskChange}
					placeholder = 'Ex :Javascript' 
				/>
				<button type = "submit">Add</button>
			</form>
		</div>
	)
}

export default AddTodo