import React, { useState } from 'react';
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import '../App.scss'
import Switch from '@mui/material/Switch';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    // Styling material components
    root: {
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
        },
    },
    headerText: {
        fontSize: 25,
        fontWeight: 500,
        color: theme.palette.background.default

    },

}));
function TodoMain({ toggleDark, settoggleDark }) {
    const classes = useStyles();

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleModeChange = () => {
        settoggleDark(!toggleDark);
    };

    return (
        <div className={classes.root}>
            <Switch
                checked={toggleDark}
                onChange={handleModeChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <TodoAdd onSubmit={addTodo} />
            <TodoList
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo} />

        </div>
    );
}

export default TodoMain;
