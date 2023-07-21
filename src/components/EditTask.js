import React, { useState } from "react";

const EditTask = ({editTask, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(value);
        editTask(value, task.id);

        setValue('');
    }

    return (
        <form className="task_form" onSubmit={handleSubmit}>
            <input className="task_input" type="text" value={value} placeholder="Update task" onChange={(e) => setValue(e.target.value)} />
            <button className="task_btn" type="submit">Edit Task</button>
        </form>
    )
}

export default EditTask;
