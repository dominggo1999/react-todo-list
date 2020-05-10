import React from 'react';

function Todos ({ todos, deleteTodo}) {
	
	const todoList = todos.length ? 
	(
		todos.map(todo =>{
			return (
				<div onClick = {()=>{deleteTodo(todo.id)}}  className="collection-item" key = {todo.id}>
					<span>{todo.content}</span>
				</div>
			)
		})
	) : (
		<p className = "center">You don't have any todo horaiii!!</p>
	)

	return(
		<div className="collection">
			{
				todoList
			}
		</div>
	) 
}

export default Todos;