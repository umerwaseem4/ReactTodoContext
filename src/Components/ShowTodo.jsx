import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function ShowTodo() {
  const { todos } = useContext(GlobalContext);
  const { deleteTodos } = useContext(GlobalContext);
  return (
    <div>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="delete-btn" onClick={() => deleteTodos(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTodo;
