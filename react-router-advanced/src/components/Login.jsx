import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'password') {
      login();
      navigate('/profile');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '60vh' 
    }}>
      <div style={{ 
        width: '300px', 
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              {error}
            </div>
          )}
          
          <div style={{ marginBottom: '15px' }}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <button 
            type="submit"
            style={{ 
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
          Use: admin / password
        </p>
      </div>
    </div>
  );
};

export default Login;