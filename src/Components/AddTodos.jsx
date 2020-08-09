import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useState } from "react";

function AddTodos() {
  const { addTodos } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      id: Math.floor(Math.random() * 100000000),
      text,
    };
    addTodos(newTodos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Add Todo</label>
          <input
            type="text"
            value={text}
            placeholder="Enter Todos..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="btn">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodos;
