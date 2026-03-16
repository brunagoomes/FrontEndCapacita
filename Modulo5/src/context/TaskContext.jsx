import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("@projeto-tarefas:v1");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("@projeto-tarefas:v1", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data) => {
    const newTask = { id: Date.now(), ...data, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const pendingTasksCount = tasks.filter(t => !t.completed).length;

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, pendingTasksCount }}>
      {children}
    </TaskContext.Provider>
  );
}