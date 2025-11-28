import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      border: '2px solid #dee2e6',
      borderRadius: '10px',
      margin: '20px auto',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#495057',
        marginBottom: '20px',
        fontSize: '1.8rem'
      }}>
        Counter Application
      </h2>
      
      <p style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: count > 0 ? '#28a745' : count < 0 ? '#dc3545' : '#6c757d',
        margin: '20px 0',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '2px solid #ced4da'
      }}>
        Current Count: {count}
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Increment
        </button>
        
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Decrement
        </button>
        
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;