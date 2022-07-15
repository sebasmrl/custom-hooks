
export const todoReducer = (initialState=[], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]; //este es un nuevo estado

        case '[TODO] Remove Todo': // payload: id
            return initialState.filter( (todo) =>  todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map( (todo) => { //payload: id
                if(todo.id === action.payload) 
                    return {...todo, done: !todo.done};
                return todo;
            });
        default:
            return initialState;
    }
    
}