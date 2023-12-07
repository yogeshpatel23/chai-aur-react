import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
