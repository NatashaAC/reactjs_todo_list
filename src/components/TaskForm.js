import React, { useState } from "react";

const TaskForm = ({addTask}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(value);
        if(value) { 
            addTask(value);
            setValue('');
        }
    }

    return (
        <form className="task_form" onSubmit={handleSubmit}>
            <input className="task_input" type="text" value={value} placeholder="What are we completing today?" required onChange={(e) => setValue(e.target.value)} />
            <button className="task_btn" type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;
