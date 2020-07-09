import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems({items, deleteItem, setUpdate}){
    let completed = false;
    const listItems = items.map(item =>
    {
        return <div className={`${completed === false? "list" : "comlist"}`} key={item.key}>
        <p>
            <span>
                <input
                    className="chicons" 
                    type="checkbox" 
                    onClick={() => {
                        completed = !completed;
                    }}
                />
            </span>
            <input 
                type="text" 
                id={item.key} value={item.text} 
                onChange={(e)=>{
                    setUpdate(e.target.value, item.key)
                }}/>
            <span>
                <FontAwesomeIcon className="faicons" onClick={() => {
                    deleteItem(item.key)
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