import React, { createContext } from "react";
import AppReducer from "./AppReducer";
import { useReducer } from "react";

const InitialState = {
  todos: [
    { id: 1, text: "Take Shower" },
    { id: 2, text: "Eat Lunch" },
    { id: 3, text: "Buy meat" },
  ],
};

export const GlobalContext = createContext(InitialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const deleteTodos = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  const addTodos = (todos) => {
    dispatch({
      type: "ADD_TODO",
      payload: todos,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ todos: state.todos, deleteTodos, addTodos }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
