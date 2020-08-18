import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems({todos, deleteItem, setUpdate, handleCheck, completed}){
    const listItems = todos.map(todo =>
    {
        return <div className={`${completed === false ? "list" : "comlist"}`} key={todo._id}>
        <p>
            <span>
                <input
                    className="chicons" 
                    type="checkbox" 
                    onClick={() => {
                        handleCheck()
                    }}
                />
            </span>
            <input 
                type="text" 
                id={todo._id} value={todo.description} 
                onChange={(e)=>{
                    setUpdate(e.target.value, todo._id)
                }}/>
            <span>
                <FontAwesomeIcon className="faicons" onClick={() => {
                    deleteItem(todo._id)
                    console.log(todo._id)
                }} icon="trash" />
            </span>
        </p>
        </div>})
        return( 
            <div>
                <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
                </FlipMove>
            </div>
        );
    }

  export default ListItems;