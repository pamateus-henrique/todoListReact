import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export default function List({
  todos,
  onDelete,
  onEdit,
  editingId,
  editingText,
  setEditingText,
  onSave,
  onDoubleClick,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={
            "bg-slate-200 p-2 my-2 rounded-sm border border-indigo-300 flex justify-between items-center"
          }
          onDoubleClick={() => onDoubleClick(todo.id)}
        >
          {todo.id === editingId ? (
            <div className='flex justify-between w-full'>
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className='bg-slate-200 ring-1 truncate'
                autoFocus
              />
              <button
                className='bg-green-400 px-2 focus:ring-1 rounded-sm'
                onClick={() => onSave(editingId)}
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <span className={todo.done ? "line-through text-slate-400" : ""}>
                {todo.text}
              </span>

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
