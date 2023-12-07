import { useRef } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const formRef = useRef();
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), todo: e.target[0].value, completed: false });
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex" ref={formRef}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
