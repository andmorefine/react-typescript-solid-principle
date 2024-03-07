import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { Todo, CustomListItemProvider } from '../../widgets'

export const customListItemProvider: CustomListItemProvider<Todo> = (
  todo,
  deleteTodoHandler,
  toggleTodoCompletedHandler
) => {
  return (
    <TodoItem
      item={todo}
      deleteTodoHandler={deleteTodoHandler}
      toggleTodoCompletedHandler={toggleTodoCompletedHandler}
    />
  )
}
