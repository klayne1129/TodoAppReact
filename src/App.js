

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
  
    handleChange(id) {
        this.setState(
            this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )   
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                <div>Let's Get Things Done!</div>
                {todoItems}
            </div>
        )    
    }
}

export default App