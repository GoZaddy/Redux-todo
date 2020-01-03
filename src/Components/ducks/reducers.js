import {ADD, DELETE} from "./types";

const defaultState = {
    todos: {

    }
}

export const todoReducer = (state = defaultState, action) => {
    switch(action.type){
        case DELETE:
           delete state.todos[action.key];
           console.log(state);
            return {
                todos:{
                    ...state.todos
                }
            };
            
        case ADD:
            return {
                todos: {
                    ...state.todos,
                     [new Date()]: action.text
                }
            }

        

        default:
            return state
    }
}