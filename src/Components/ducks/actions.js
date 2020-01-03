import {ADD, DELETE} from "./types";
export const addTodo = (text) => {
    return{
        type: ADD,
        text
    }
}

export const deleteTodo = (key) => {
    return{
        type: DELETE,
        key
    }
}
