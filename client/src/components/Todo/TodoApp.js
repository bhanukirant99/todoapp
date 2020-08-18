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
      items:[...this.props.sendUser.todos],
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
    console.log(this.props.sendUser.id)
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
      const newItems = [...this.state.items, newItem];
    this.setState({
      // items: this.props.sendUser,
      items: newItems,
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

  checkItem = (key) => {
    const filteredItems = this.state.items.map(item =>
      item.key===key);
      const isItemChecked = true;
      if(isItemChecked) {
        // this.state.item.completed;
      }
    
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate = (text, key) => {
    console.log(text, key)
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
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
          <p>{this.state.items.text}</p>
            <ListItems 
              items={this.state.items}
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
