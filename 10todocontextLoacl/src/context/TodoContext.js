import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: "sfef", todo: "", completed: false }],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggelTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
