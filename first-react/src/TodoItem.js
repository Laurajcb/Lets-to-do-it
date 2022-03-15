import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <section className="TodoItem">
            <input 
            type="checkBox" 
            />
            <p>Title: {props.text}</p>
        </section>
    )
}

export { TodoItem };