export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoExt extends Todo {
  dueDate: string
}
export interface TodoApi extends Omit<Todo, 'title'> {
  todo: string
}

export interface TodoItemProps<T> {
  item: T
  deleteTodoHandler: DeleteTodoHandler
  toggleTodoCompletedHandler: toggleTodoCompletedHandler
}

export interface TodoListAddFormProps<T> {
  addTodoHandler: AddTodoHandler
  todoFactory: TodoFactory<T>
}

export type CustomListItemProvider<T> = (
  todo: T,
  deleteTodoHandler: DeleteTodoHandler,
  toggleTodoCompletedHandler: ToggleTodoCompletedHandler
) => React.JSX.Element

export interface TodoListItemsProps {
  todos: (Todo | TodoExt | TodoApi)[]
  deleteTodoHandler: DeleteTodoHandler
  toggleTodoCompletedHandler: toggleTodoCompletedHandler
  customListItemProvider: CustomListItemProvider
}

export interface TodoListWidgetProps<T, U> {
  title: string
  fetchCallback: FetchCallback<U>
  todoFactory: TodoFactory<T>
  customListItemProvider: CustomListItemProvider<T>
}

export type DeleteTodoHandler = (id: string) => void

export type toggleTodoCompletedHandler = (id: string) => void

export type FetchCallback<U> = (signal: AbortSignal) => U

export type TodoFactory<T extends Todo | TodoExt | TodoApi = Todo> = (
  title: string
) => T

export type AddTodoHandler = (newTodo: Todo | TodoExt | TodoApi) => void
