import React from 'react';
import './TodoApp.css';
import List from './List'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// library.add(faTrash)

const Todo = (one, two) => {
    // const listTodos = Array.of(todos)
    // console.log(listTodos)
    // updateTodoList = () => {
    //     fetch('http://localhost:3000/todos', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'},
    //       })
    //         .then(response => response.json())
    //         .then(todos => {
    //           if (dvtodos) {
    //             this.state.todos = dbtodos;
    //           }
    //         })
    //   }
    // addItem = (e) => {
    //   e.preventDefault();
    //   const newItem = this.state.currentItem;
    //   if(newItem.text !==""){
    //     const items = [...this.state.items, newItem];
    //   this.setState({
    //     items: items,
    //     currentItem:{
    //       text:'',
    //       key:'',
    //       completed: false
    //     }
    //   })
    //   }
    // }
      return (
        <div className="Todo">
          HEllo
          <header>
            <form id="to-do-form" >
              <input type="text" 
                placeholder="Enter task" 
              >
              </input>
              <button type="submit">Add</button>
            </form>
            <p>todos</p>
            <List one= {one} two = {two}/>
          </header>
        </div> 
      );
}

  
  
export default Todo;

