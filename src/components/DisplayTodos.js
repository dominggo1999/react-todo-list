import React from 'react'

const DisplayTodos = ({todos, deleteTodo, finishedTodo}) => {

	const isFinished = (todo) => {
		return todo.finished ?  
		<i className="far fa-check-square"></i>
		: <i className="far fa-circle"></i> 
	};

	const linethrough = (todo) =>{
		return todo.finished ?  "line-through" : "";
	}

	const content = todos.length ? 
		todos.map(todo=>(
			<li className="todo-item" key ={todo.id}>
				<div className="left">
					<div className="dot">
						  <i className="fas fa-circle"></i>
					</div>
					<div className="todo-text">
						<div className={`todo ${linethrough(todo)}`}>{todo.todo}</div>
						<div className="task">{todo.task}</div>
					</div>
				</div>
				<div className="icons">
					  <div className="remove" onClick = {()=>deleteTodo(todo)}><i className="far fa-trash-alt"></i></div>
					  <div className="finished" onClick = {()=>{finishedTodo(todo)}}>{isFinished(todo)}</div>
				</div>
			</li>
		)):
		<li className="text-center">You have nothing to do, horraii !!</li>

	return (
		<div className = 'display-todos'>
			<ul>
				{content}
			</ul>
		</div>
	)
}

export default DisplayTodos