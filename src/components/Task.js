import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckSquare, faPenToSquare, faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({task, toggleComplete, deleteTask, editTask}) => {
    return (
        <div className="task">
            <div>
                <FontAwesomeIcon className="task_icon" icon={task.completed ? faCheckSquare: faSquare} onClick={() => toggleComplete(task.id)} />
            </div>
            <span>{task.task}</span>
            <div>
                <FontAwesomeIcon className="task_icon" icon={faPenToSquare} onClick={() => editTask(task.id)} />
                <FontAwesomeIcon className="task_icon" icon={faTrash} onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    )
}

export default Task;
