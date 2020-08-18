import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems({items, deleteItem, setUpdate, handleCheck, completed}){
    const listItems = items.map(item =>
    {
        return <div className={`${completed === false ? "list" : "comlist"}`} key={item.id}>
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
                id={item.id} value={item.description} 
                onChange={(e)=>{
                    setUpdate(e.target.value, item.id)
                }}/>
            <span>
                <FontAwesomeIcon className="faicons" onClick={() => {
                    deleteItem(item.id)
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