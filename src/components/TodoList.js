import React, { useState } from 'react';
import TodoAdd from "./TodoAdd";

function TodoList({ todos, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoAdd edit={edit} onSubmit={submitUpdate} />;
    }
    return todos.map((todo, index) => (
        <div class="container" key={index}>
            <div class="row" >
                <div class="col-sm">
                    <li class="list-group-item">{todo.text}</li>
                </div>
                <div class="col-sm">
                    <button className="icon-btn-style" onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                        <i style={{ cursor: "pointer", "color": "#00B1F6", fontSize: 20 }}
                            className="fa fa-pencil">
                        </i>
                    </button>
                    <button className="icon-btn-style" onClick={() => removeTodo(todo.id)}>
                        <i style={{ cursor: "pointer", "color": "red", fontSize: 20 }}
                            className="fa fa-trash">
                        </i>
                    </button>
                </div>
            </div>
        </div>

    ));
}

export default TodoList;
