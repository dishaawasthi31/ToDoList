import React, { useState, useEffect, useRef } from 'react';
function TodoAdd(props) {
    const [task, setTask] = useState('')

    const handleInput = (e) => {
        const value = e.target.value
        setTask(value)
    }
    const handleAddTask = () => {
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task
        });
        setTask('');
    }
    return (
        <div class="container">
            {props.edit ? (
                <div class="row">
                    <div class="col-sm">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control"
                                placeholder="Update Task Name"
                                aria-label="Username" aria-describedby="basic-addon1"
                                onChange={(e) => handleInput(e)}
                                value={task}
                            />
                        </div>
                    </div>
                    <div class="col-sm">
                        <button type="button" class="btn btn-primary" onClick={() => handleAddTask()}>Update Task</button>
                    </div>

                </div>
            ) : (
                    <div class="row">
                        <div class="col-sm">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control"
                                    placeholder="Add Task Name"
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    onChange={(e) => handleInput(e)}
                                    value={task}
                                />
                            </div>
                        </div>
                        <div class="col-sm">
                            <button type="button" class="btn btn-primary" onClick={() => handleAddTask()}>Add Task</button>
                        </div>
                    </div>
                )}
        </div>

    );

}

export default TodoAdd;
