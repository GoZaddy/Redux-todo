import { connect } from "react-redux";
import App from "../App";
import {addTodo,deleteTodo} from "./ducks/operations";
import Todos from "./Todos";

const mapStateToProps = (state) => {
    return {todos: state.todos};
}

const mapDispatchToProps = (dispatch) => {
    const addNewTodo = (text) => {
        dispatch(addTodo(text));
    }
    const deleteThisTodo = (key) => {
        dispatch(deleteTodo(key));
    }
    return {addNewTodo, deleteThisTodo};
}

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);
    