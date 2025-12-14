import React, { useState } from 'react';

const TodoList = () => {
  // Initialize component state with a few todos for demonstration
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Testing', completed: false },
    { id: 2, text: 'Build Todo App', completed: true },
    { id: 3, text: 'Write Tests', completed: false }
  ]);

  // Method to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Method to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Method to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px'
      }}>
        Todo List
      </h1>
      
      {/* Add Todo Form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.todoInput;
          if (input.value.trim()) {
            addTodo(input.value);
            input.value = '';
          }
        }}
        style={{ marginBottom: '30px' }}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            name="todoInput"
            placeholder="Enter a new todo..."
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Add Todo
          </button>
        </div>
      </form>
      
      {/* Todo List */}
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No todos yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li 
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
                margin: '10px 0',
                backgroundColor: todo.completed ? '#f0fff0' : '#fff',
                borderRadius: '8px',
                border: `1px solid ${todo.completed ? '#4CAF50' : '#ddd'}`
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flex: 1,
                  cursor: 'pointer'
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ 
                    marginRight: '15px',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#666' : '#333',
                    fontSize: '16px',
                    flex: 1
                  }}
                >
                  {todo.text}
                </span>
              </div>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {/* Statistics */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <h3 style={{ marginTop: 0 }}>Stats</h3>
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        <p>Pending: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;