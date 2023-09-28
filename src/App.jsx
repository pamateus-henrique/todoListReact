import { useEffect, useState } from "react";

import List from "./List";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditigingText] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleEdit(id) {
    const toEdit = todos.find((todo) => todo.id === id);
    setEditigingText(toEdit.text);
    setEditingId(toEdit.id);
  }

  function handleSave(id) {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editingText } : todo
    );

    setTodos(updateTodos);
    setEditingId(null);
  }

  function handleDone(id) {
    console.log(id);
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updateTodos);
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
          <List
            todos={todos}
            onDelete={handleDelete}
            onEdit={handleEdit}
            editingId={editingId}
            editingText={editingText}
            setEditingText={setEditigingText}
            onSave={handleSave}
            onDoubleClick={handleDone}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
