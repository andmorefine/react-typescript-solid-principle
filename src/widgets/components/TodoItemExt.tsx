import React from 'react'
import {
  TodoExt,
  DeleteTodoHandler,
  toggleTodoCompletedHandler,
} from '../../widgets'

interface TodoItemExtProps {
  item: TodoExt
  deleteTodoHandler: DeleteTodoHandler
  toggleTodoCompletedHandler: toggleTodoCompletedHandler
}

export const TodoItemExt: React.FC<TodoItemExtProps> = ({
  item,
  deleteTodoHandler,
  toggleTodoCompletedHandler,
}) => {
  return (
    <div
      className={
        'p-2 bg-zinc-200 mb-2 rounded flex items-center gap-3 text-slate-900'
      }
    >
      <input
        id={`check-${item.id}`}
        type="checkbox"
        defaultChecked={item.completed}
        className={
          'appearance-none w-4 h-4 rounded bg-red-400 border-gray-600 checked:bg-gray-700'
        }
        onClick={() => toggleTodoCompletedHandler(item.id)}
      />
      <label
        htmlFor={`check-${item.id}`}
        className={`cursor-pointer text-slate-900 w-full inline-block" ${
          item.completed ? 'line-through' : ''
        }`}
      >
        {item.title}
      </label>
      <small className={'min-w-[150px] text-slate-500 italic'}>
        期日 :&nbsp;<time>{item.dueDate}</time>
      </small>
      <button
        className={
          'bg-red-600 ml-auto w-6 h-6 rounded text-zinc-200 hover:bg-red-500 hover:text-slate-50 transition-colors duration-300'
        }
        onClick={() => deleteTodoHandler(item.id)}
      >
        X
      </button>
    </div>
  )
}