import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...todos, 
                { task: newTodo, id: uuidv4(), isDone: false }
            ]);
            setNewTodo("");
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => ({ ...todo, isDone: true })));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => 
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <div className="input-container">
                <input
                    className="todo-input"
                    placeholder="Add a new task"
                    value={newTodo}
                    onChange={updateTodoValue}
                    
                />
                <button className="add-task-btn" onClick={addNewTask}>Add Task</button>
            </div>

            <hr />

            <h4>Tasks:</h4>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span style={todo.isDone ? { textDecoration: "line-through", color: "#888" } : {}}>
                            {todo.task}
                        </span>
                        <div className="todo-actions">
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button className="done-btn" onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        </div>
                    </li>
                ))}
            </ul>

            <button className="mark-all-btn" onClick={markAllAsDone}>Mark All as Done</button>
        </div>
    );
}
