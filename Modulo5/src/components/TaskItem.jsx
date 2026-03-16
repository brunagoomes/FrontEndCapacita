export function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ listStyle: 'none', padding: '15px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 
          onClick={() => onToggle(task.id)} 
          style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer', margin: 0, color: task.completed ? '#888' : 'inherit' }}
        >
          {task.title}
        </h3>
        <span style={{ fontSize: '12px', backgroundColor: '#eef', padding: '2px 8px', borderRadius: '10px' }}>{task.category}</span>
        {task.description && <p style={{ fontSize: '14px', margin: '10px 0 0', color: '#666' }}>{task.description}</p>}
      </div>
      <button onClick={() => onDelete(task.id)} style={{ backgroundColor: 'transparent', border: '1px solid red', color: 'red', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
        Remover
      </button>
    </li>
  );
}