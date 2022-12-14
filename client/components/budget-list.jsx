import React from 'react';

export default function TodoList(props) {
  return (
    props.todos.map(todo => {
      return <li className="list-group-item" key={todo.itemId}>
        <h6 className="d-flex justify-content-between">{todo.item},<button className="btn btn-outline-light" onClick={() => props.delete(todo)}><i className="far fa-trash-alt text-muted pe-2" /></button></h6>
        <h6 className="text-muted font-italic">${todo.cost}</h6>
      </li>;

    })
  );
}
