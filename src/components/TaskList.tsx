import React from 'react'

type Task = {
    id: number,
    title: string,
    completed: boolean,
}

type TaskListProps = {
    tasks: Task[],
    toggleComplete: (taskId: number) => void,
    deleteTask: (taskId: number) => void,
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div className='mt-5 space-y-3 rounded-lg max-w-md mx-auto'>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className='flex items-center justify-between p-4 bg-white rounded shadow hover:shadow-md transition'
                >
                    <span
                        className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                    >
                        {task.title}
                    </span>

                    <div className="space-x-2">
                        <button
                            onClick={() => toggleComplete(task.id)}
                            className='px-3 py-1 text-sm rounded bg-green-100 text-green-700 hover:bg-green-200'
                        >
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>

                        <button
                            onClick={() => deleteTask(task.id)}
                            className='px-3 py-1 text-sm rounded bg-red-100 text-red-700 hover:bg-red-200'
                        >
                            Delete
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default TaskList
