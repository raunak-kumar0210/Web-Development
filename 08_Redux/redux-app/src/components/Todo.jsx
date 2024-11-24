import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./Todo.css"

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const markAsDoneHandler = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <div className="todo-container">
            <AddForm />
            <h2 className="todo-header">Todo List</h2>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`todo-item ${todo.isDone ? "done" : ""}`}
                    >
                        <span className="todo-text">{todo.task}</span>
                        <div>
                            <button
                                className="btn delete-btn"
                                onClick={() => clickHandler(todo.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="btn done-btn"
                                onClick={() => markAsDoneHandler(todo.id)}
                            >
                                Mark As Done
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
