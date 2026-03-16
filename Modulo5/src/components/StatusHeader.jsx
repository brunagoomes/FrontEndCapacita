import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export function StatusHeader() {
  const { pendingTasksCount } = useContext(TaskContext);
  return (
    <div style={{ marginTop: '20px' }}>
      <h1>Gerenciador Pro</h1>
      <p style={{ color: '#666' }}>Você ainda tem <strong>{pendingTasksCount}</strong> tarefas para finalizar.</p>
    </div>
  );
}