import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const Todos = ({addNewTodo, todos, deleteThisTodo}) => {

    const [input, setInput] = useState("");
    const clickHandler = (e) => {
        e.preventDefault();
        addNewTodo(input);
        setInput("");
    }
    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    
    /*console.log(todos);
    console.log(addNewTodo);*/
    //console.log(props);
    return (
        <div>
            
            <form action="">
                <input type="text" name="" id="" value={input} onChange={onChangeHandler} />
                <button onClick={clickHandler}>add new todo</button>
            </form>
            <div>
                {Object.keys(todos).map((key) => <ToDoItem key = {key} id={key} text={todos[key]} deleteTodo = {() => {deleteThisTodo(key)}} />)}
            </div>

        </div>
    );
}

export default Todos;
