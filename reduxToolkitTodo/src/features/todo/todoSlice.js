import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "conset", completed: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        text: actions.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    editTodo: (state, actions) => {
      //   console.log(actions.payload);
      state.todos = state.todos.map((todo) =>
        todo.id === actions.payload.id
          ? { ...todo, text: actions.payload.text }
          : todo
      );
      //   const todo = state.todos.find((todo) => todo.id === actions.payload.id);
      //   if (todo) {
      //     todo.text = actions.payload.text;
      //   }
    },
    toggleTodo: (state, actions) => {
      state.todos = state.todos.map((todo) =>
        todo.id === actions.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
