import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export default function List({
  todos,
  onDelete,
  onEdit,
  editingId,
  editingText,
  setEditingText,
  onSave,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='bg-slate-200 p-2 rounded-sm border border-indigo-300 flex justify-between items-center'
        >
          {todo.id === editingId ? (
            <div className='flex'>
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <span>{todo.text}</span>
              <div className='flex space-x-4'>
                <TrashIcon
                  className='w-4 h-4'
                  onClick={() => onDelete(todo.id)}
                />
                <PencilSquareIcon
                  className='w-4 h-4'
                  onClick={() => onEdit(todo.id)}
                />
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
