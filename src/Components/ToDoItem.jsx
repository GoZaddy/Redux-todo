import React from "react";

const ToDoItem = ({ text, id , deleteTodo}) => {
    return (
        <div style={{ border: "1px solid #afafaf", padding: "1rem", marginBottom: "1rem" }}>
            <p>
                {text}
                <span
                    style={{
                        float: "right",
                        cursor: "pointer"
                    }}
                    onClick = {deleteTodo}
                >
                    X
                </span>
            </p>

        </div>
    );
}

export default ToDoItem;