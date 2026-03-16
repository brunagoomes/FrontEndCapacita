import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskContext, TaskProvider } from './context/TaskContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { withPremiumAccess } from './hoc/withPremiumAccess';

import Header from './components/Header';
import { StatusHeader } from './components/StatusHeader';
import { TaskForm } from './components/TaskForm';
import { TaskItem } from './components/TaskItem';

const StatsPage = () => {
  const { tasks } = useContext(TaskContext);
  const done = tasks.filter(t => t.completed).length;
  return (
    <div style={{ padding: '20px 0' }}>
      <h2>📊 Estatísticas de Produtividade</h2>
      <p>Total de tarefas criadas: <strong>{tasks.length}</strong></p>
      <p>Tarefas concluídas: <strong>{done}</strong></p>
      <p>Aproveitamento: <strong>{tasks.length > 0 ? Math.round((done/tasks.length)*100) : 0}%</strong></p>
    </div>
  );
};

const ProtectedStats = withPremiumAccess(StatsPage);

function AppContent() {
  const { tasks, toggleTask, deleteTask, addTask } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a',
    color: theme === 'light' ? '#333' : '#f5f5f5',
    minHeight: '100vh', transition: '0.3s'
  };

  return (
    <BrowserRouter>
      <div style={style}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
          <Header />
          <StatusHeader />
          <Routes>
            <Route path="/" element={
              <ul style={{ padding: 0, marginTop: '20px' }}>
                {tasks.map(t => <TaskItem key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />)}
              </ul>
            } />
            <Route path="/new" element={<TaskForm onAddTask={addTask} />} />
            <Route path="/stats" element={<ProtectedStats />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </ThemeProvider>
  );
}