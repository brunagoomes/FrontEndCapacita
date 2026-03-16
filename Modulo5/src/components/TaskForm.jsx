import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({ title: '', description: '', category: 'Pessoal' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.length < 3) {
      setError('O título precisa de pelo menos 3 letras!');
      return;
    }
    onAddTask(formData);
    navigate('/'); // Volta para a home automaticamente
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
      <div>
        <input
          placeholder="Título da Tarefa *"
          value={formData.title}
          onChange={(e) => { setFormData({...formData, title: e.target.value}); setError(''); }}
          style={{ padding: '12px', width: '100%', border: error ? '2px solid red' : '1px solid #ccc', borderRadius: '5px' }}
        />
        {error && <p style={{ color: 'red', fontSize: '13px', margin: '5px 0' }}>{error}</p>}
      </div>

      <textarea
        placeholder="Descrição detalhada"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        style={{ padding: '12px', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <select 
        value={formData.category} 
        onChange={(e) => setFormData({...formData, category: e.target.value})}
        style={{ padding: '12px', borderRadius: '5px' }}
      >
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudo">Estudo</option>
      </select>

      <button 
        type="submit" 
        disabled={formData.title.length < 3}
        style={{ padding: '15px', backgroundColor: formData.title.length < 3 ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Salvar Tarefa
      </button>
    </form>
  );
}