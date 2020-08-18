// import React from 'react';
// import './TodoApp.css';
// import List from './List'
// // import { library } from '@fortawesome/fontawesome-svg-core'
// // import { faTrash } from '@fortawesome/free-solid-svg-icons'

// // library.add(faTrash)

// const Todo = (todos) => {
//     const listTodos = Array.of(todos)
//     console.log(listTodos)
//     // updateTodoList = () => {
//     //     fetch('http://localhost:3000/todos', {
//     //         method: 'get',
//     //         headers: {'Content-Type': 'application/json'},
//     //       })
//     //         .then(response => response.json())
//     //         .then(todos => {
//     //           if (dvtodos) {
//     //             this.state.todos = dbtodos;
//     //           }
//     //         })
//     //   }
//     // addItem = (e) => {
//     //   e.preventDefault();
//     //   const newItem = this.state.currentItem;
//     //   if(newItem.text !==""){
//     //     const items = [...this.state.items, newItem];
//     //   this.setState({
//     //     items: items,
//     //     currentItem:{
//     //       text:'',
//     //       key:'',
//     //       completed: false
//     //     }
//     //   })
//     //   }
//     // }
//       return (
//         <div className="Todo">
//           HEllo
//           <List listTodos= {listTodos}/>
//           <header>
//             <form id="to-do-form" >
//               <input type="text" 
//                 placeholder="Enter task" 
//               >
//               </input>
//               <button type="submit">Add</button>
//             </form>
//             <p>todos</p>
//           </header>
//         </div> 
//       );
// }

  
  
// export default Todo;

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
        id:'',
        completed: false
      }
    }
  }
  
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, this.props.todos];
    this.setState({
      todos: this.props.todos,
      currentItem:{
        text:'',
        completed: false
      }
    })
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem:{
        text: e.target.value,
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
    const filteredItems = this.state.todos.filter(todo =>
      todo.id!==this.props.todos.id);
    this.setState({
      todos: filteredItems
    })
  }

  setUpdate = (text, key) => {
    const todos = this.state.todos;
    todos.map(todo=>{      
      if(todo.key===todo){
        todo.text= todo;
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
