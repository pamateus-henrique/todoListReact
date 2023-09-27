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
          className='bg-slate-200 p-2 my-2 rounded-sm border border-indigo-300 flex justify-between items-center'
        >
          {todo.id === editingId ? (
            <div className='flex justify-between w-full'>
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className='bg-slate-200 ring-1 truncate'
              />
              <button
                className='bg-green-400'
                onClick={() => onSave(editingId)}
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <span>{todo.text}</span>

              <div className='flex space-x-4'>
                <PencilSquareIcon
                  className='w-4 h-4'
                  onClick={() => onEdit(todo.id)}
                />
                <TrashIcon
                  className='w-4 h-4'
                  onClick={() => onDelete(todo.id)}
                />
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
