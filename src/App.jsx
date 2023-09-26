import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function List() {
    return (
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='bg-slate-200 p-2 rounded-sm border border-indigo-300'
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-white'>
      <div className='flex flex-col min-w'>
        <form method='post' onSubmit={handleSubmit}>
          <input
            type='text'
            className='rounded-md bg-slate-100 p-2 ring-1 hover:ring-2'
            placeholder='Today I will..'
            value={inputValue}
            onChange={handleChange}
          />
          <button
            className='ml-2 py-2 px-4 bg-green-400 rounded-md hover:ring-1'
            type='submit'
          >
            Add
          </button>
        </form>
        <div className='py-4'>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
