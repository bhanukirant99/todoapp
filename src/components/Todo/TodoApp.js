import React from 'react';
import './TodoApp.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text: '',
        key: '',
        completed: false
      }
    }
  }
  
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:'',
        completed: false
      }
    })
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  // handleCheck = () => {
  //   this.setState({
  //     currentItem:{
  //       completed: !this.state.completed
  //     }
  //   })
  //   console.log(this.state.currentItem.completed);
  // }

  // checkItem = (key) => {
  //   const filteredItems = this.state.items.map(item =>
  //     item.key===key);
  //     const isItemChecked = true;
  //     if(isItemChecked) {
  //       this.setState({completed:!completed});
  //     }
    
  // }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate = (text, key) => {
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
              value= {this.state.currentItem.text} 
              onChange={this.handleInput}>
            </input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>
            <ListItems 
              items={this.state.items}
              // handleCheck={this.handleCheck} 
              deleteItem={this.deleteItem} 
              setUpdate={this.setUpdate}
            />          
        </header>
      </div>
    );
  }
}


export default TodoApp;
