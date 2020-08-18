import React from 'react';
import './TodoApp.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    // initItems(this.props.sendUser);
    this.state = {
      todos:[...this.props.sendUser.todos],
      // items:[],

      currentItem:{
        description: '',
        completed: false
      }
    }
    // this.initItems = this.initItems.bind(this)
  }
  // console.log(this.props.sendUser)

  // initItems = (props.sendUser) => {

  // }

  addItem = (e) => {
    console.log(this.state.todos)
    // console.log(this.props.sendUser.id)
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(this.state.currentItem)
    console.log(newItem)
    if(newItem.description !==""){
      fetch('http://localhost:3000/addtodo', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        description: newItem,
        userid: this.props.sendUser.id
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          console.log(user)
        }
      })
      const newtodos = [...this.state.todos, newItem];
    this.setState({
      // items: this.props.sendUser,
      todos: newtodos,
      currentItem:{
        description:'',
        completed: false
      }
    })
    }
    // console.log(this.state.items)
  }

  handleInput = (e) => {
    this.setState({
      currentItem:{
        description: e.target.value,
      }
    })
    // console.log(this.state.currentItem)
  }

  handleCheck = () => {
    this.setState({
      currentItem:{
        completed: !this.state.completed
      }
    })
    console.log(this.state.currentItem.completed);
  }

  checkItem = (id) => {
    const filteredItems = this.state.todos.map(todo =>
      todo._id===id);
      const isItemChecked = true;
      if(isItemChecked) {
        // this.state.item.completed;
      }
    
  }

  deleteItem = (id) => {
    const filteredItems = this.state.todos.filter(todo =>
      todo._id!==id);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate = (text, id) => {
    console.log(text, id)
    const todos = this.state.todos;
    todos.map(todo=>{      
      if(todo._id===id){
        todo.description = text;
      }
    })
    this.setState({
      todos: todos
    }) 
  }

  render(){
    return (
      <div className="TodoApp">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" 
              placeholder="Enter task" 
              value= {this.state.currentItem.description} 
              onChange={this.handleInput}>
            </input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.todos.description}</p>
            <ListItems 
              todos={this.state.todos}
              completed = {false}
              handleCheck={this.handleCheck} 
              deleteItem={this.deleteItem} 
              setUpdate={this.setUpdate}
            />          
        </header>
      </div>
    );
  }
}


export default TodoApp;
