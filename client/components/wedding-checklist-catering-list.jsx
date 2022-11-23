import React from 'react';

export default function WeddingCateringList(props) {
  return (
    props.todos.map(todo => {
      return <li className="list-group-item" key={todo.foodId}>

        <h6 className="d-flex justify-content-between">{todo.foodName},<button className="btn btn-outline-light" onClick={() => props.delete(todo)}><i className="far fa-trash-alt text-muted pe-2" /></button></h6>
        <h6 className="text-muted font-italic">{todo.foodCategory}</h6>
      </li>;

    })
  );
}
