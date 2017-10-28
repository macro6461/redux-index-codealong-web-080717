export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo) }
    case 'DELETE_TODO':
      const removalIndex = state.todos.findIndex(todo => todo.id === action.id)
      return Object.assign({}, state, {todos: [...state.todos.slice(0, removalIndex), ...state.todos.slice(removalIndex + 1)]})
    default:
      return state;
  }
}
