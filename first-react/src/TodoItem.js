import React from 'react';

function TodoItem(props) {
    return (
        <section>
            <p>Title: {props.text}</p>
            <p>Completed: {props.completed ? 'Yes' : 'No'}</p>
            <hr></hr>
        </section>
    )
}

export { TodoItem };