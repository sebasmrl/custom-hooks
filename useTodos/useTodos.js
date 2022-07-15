import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodos = () => {

    const [todos, dispatchTodos] = useReducer( todoReducer, [], init);

    useEffect(() => {
      //cuando se cargara por primera vez, sobreescribe el localStorage con un arreglo vacio de initialState 
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        //crear la accion que se va a enviar
        const action = {
          type:'[TODO] Add Todo',
          payload: todo
        }
        dispatchTodos( action );
        console.log('llamado a la funcion');
      }
    
    
      const handleDeleteTodo = (id) => {
        dispatchTodos({
          type: '[TODO] Remove Todo',
          payload: id
        });
      }
      const handleToggleTodo = (id) => {
        dispatchTodos({
          type: '[TODO] Toggle Todo',
          payload: id
        })
      }

    return {
      todos,
      todosCount: todos.length,
      pendingTodosCount: todos.filter(todo => !todo.done).length,
      handleToggleTodo, 
      handleDeleteTodo, 
      handleNewTodo
    }
}
