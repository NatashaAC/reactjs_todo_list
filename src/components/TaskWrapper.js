import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskForm from "./TaskForm";
import Task from "./Task";
import EditTask from "./EditTask";

const TaskWrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([
            ...tasks, 
            {
                id: uuidv4(), 
                task: task, 
                completed: false, 
                isEditing: false
        }])
        // console.log(tasks);
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const editTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, isEditing: !task.isEditing} : task))
    }

    const updateTask = (task, id) => {
        setTasks(tasks.map((t) => t.id === id ? {...task, task, isEditing: !t.isEditing} : t))
    }

    return (
       <div className="wrapper">
        <h1>Tasks To Complete</h1>
        <TaskForm addTask={addTask} />
        {tasks.map((task, id) => (
            task.isEditing ? (
                <EditTask
                    key={id}
                    task={task}
                    editTask={updateTask}
                />
            ) : (
                <Task
                    key={id}
                    task={task}  
                    toggleComplete={toggleComplete} 
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            )
        ))}
       </div>
    )
}

export default TaskWrapper;
