import React, { useState } from 'react';

type TaskInputProps = {
    onAddTask: (taskTitle: string) => void;
    totalTasks: number,
    completedTasks: number,
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask, totalTasks, completedTasks }) => {

    const [newTask, setNewTask] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newTask.trim() !== "") {
            onAddTask(newTask);
            setNewTask("");
        }
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit} className='space-x-5'>
                <input type="text"
                    value={newTask}
                    onChange={handleChange}
                    placeholder='Enter new task'
                    className='border border-gray-500 rounded-xl p-3' />

                <button type='submit' className='border bg-blue-500 rounded-full px-4 py-2 font-semibold text-lg text-white'>Add task</button>
            </form>

            <div className='max-w-md mx-auto flex flex-row justify-center space-x-8 bg-white shadow rounded p-4 mt-5 text-gray-700 text-lg'>
                <p>Total: <span className='font-semibold'>{totalTasks}</span></p>
                <p>Completed: <span className='font-semibold text-green-600'>{completedTasks}</span></p>
                <p>Remaining: <span className='font-semibold text-red-500'>{totalTasks - completedTasks}</span></p>
            </div>


        </div>
    )
}

export default TaskInput
