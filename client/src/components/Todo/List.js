import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const List = ({one , two}) => {
    console.log(typeof 'one[0]')
    console.log(one)
//    let todos = listTodos[0].sendUser[0]
//    console.log(todos)

    // console.log(typeof 'todos')
    // const listTodos = todos.map(todo =>
    // {
    //     return todo
    // })
       return (
           <div>
               hi
              {one.sendUser.map(todo => 
                <div>{todo.description}</div>
                // this.props.todos.sendUser.map(todo => todo.description)
                )
              }

           </div>
       )
}


export default List;