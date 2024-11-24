// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/todoSlice";

// export default function AddForm() {
//     const [task, setTask] = useState("");
//     const dispatch = useDispatch();

//     const submitHandler = (event) => {
//         event.preventDefault();
//         console.log(task);
//         dispatch(addTodo(task));
//         setTask("");
//     };

//     return (
//         <>
//             <form onSubmit={submitHandler}>
//                 <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
//                 <button>Add task</button>
//             </form>
//         </>
//     );
// }

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css"; 

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add a Task</h2>
            <form onSubmit={submitHandler} className="add-form">
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Enter a new task"
                    className="task-input"
                />
                <button type="submit" className="add-button">
                    Add Task
                </button>
            </form>
        </div>
    );
}
