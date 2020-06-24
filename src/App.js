

import React from "react"
import TodoItem from "./todo-app/components/TodoItem"
import todosData from "./todo-app/todosData"
import Header from './todo-app/components/Header'
import Footer from './todo-app/components/Footer'
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
                <Header/>
                {todoItems}
                <Footer/>
            </div>
        )    
    }
}

export default App