import { useState } from 'react';
import './TodoList.css';

// tipagem
interface Task {
  id: number;
  text: string;
}

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;
    
    const newTask: Task = {
      id: Date.now(),
      text: inputValue
    };
    
    setTasks([...tasks, newTask]);
    setInputValue(''); // limpa o input
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Módulo de Tarefas</h2>
      
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Adicionar nova diretriz espacial..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="btn-add" onClick={addTask}>Adicionar</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Nenhuma diretriz registrada no terminal.</p>
        ) : (
          tasks.map(task => (
            <li key={task.id} className="task-item">
              <span>{task.text}</span>
              <button className="btn-delete" onClick={() => removeTask(task.id)}>Excluir</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;