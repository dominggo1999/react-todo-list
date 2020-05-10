import React, { Component } from 'react';


class AddTodo extends Component {
	state = {
		content : ""
	}

	changeHandler = (e) =>{
		this.setState({
			content : e.target.value
		})
	}

	submitHandler = (e) =>{
		e.preventDefault();
		if(this.state.content !== ""){
			this.props.addTodo(this.state);	
			this.setState({
				content : ''
			})
		}
	}

	render(){
		return(

			<div className = "add-todo">
				<form className = "form" onSubmit={this.submitHandler}>
					<label>Add todo</label>
					<input onChange={this.changeHandler} type="text" value={this.state.content}/>
				</form>
			</div>
		)
	}
}

export default AddTodo;