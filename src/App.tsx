import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

type Task = {
  id: number,
  title: string,
  completed: boolean,
}

function App() {

  const [tasks,setTasks] = useState<Task[]>([]);
  const [completedTask,setCompletedTask] = useState<number>(0);

  useEffect(() => {
    const count = tasks.filter(task => task.completed).length;
    setCompletedTask(count);
  },[tasks])

  const handleAddTask = (taskTitle: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks,newTask]);
  }

  const handleToggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map(task => task.id === taskId ? {...task,completed: !task.completed} : task);
    setTasks(updatedTasks);
  }

  const handleDelete = (taskId: number) => {
    const filterTasks = tasks.filter(task => {
      if(task.id !== taskId){
        return task;
      }
    })
    setTasks(filterTasks);
  }

  return (
    <div className="text-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Task Manager</h1>
      <TaskInput onAddTask={handleAddTask} totalTasks={tasks.length} completedTasks={completedTask} />
      <TaskList tasks={tasks} toggleComplete={handleToggleComplete} deleteTask={handleDelete}/>
    </div>
  );
}

export default App;
