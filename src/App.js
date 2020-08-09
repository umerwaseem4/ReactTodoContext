import React from "react";
import "./App.css";
import AddTodos from "./Components/AddTodos";
import ShowTodo from "./Components/ShowTodo";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>Todo App</h1>
        <AddTodos />
        <ShowTodo />
      </div>
    </GlobalProvider>
  );
}

export default App;
