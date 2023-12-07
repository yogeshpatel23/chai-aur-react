import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((store) => store.todos);
  return (
    <div className="flex flex-wrap gap-y-3">
      {todos.map((todo) => (
        <div className="w-full" key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
