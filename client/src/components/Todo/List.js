import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const List = ({listTodos, deleteItem, setUpdate}) => {
    console.log( listTodos[0])
   let todos = listTodos[0].sendUser[0]
   console.log(todos)

    // console.log(typeof 'todos')
    // const listTodos = todos.map(todo =>
    // {
    //     return todo
    // })
       return (
           <div>
              {/* {listTodos} */}
           </div>
       )
}


export default List;