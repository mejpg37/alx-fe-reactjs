import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/profile';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock authentication
      if (credentials.username === 'admin' && credentials.password === 'password123') {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate(from, { replace: true });
      } else {
        setError('Invalid credentials. Try admin/password123');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '70vh',
      padding: '20px'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '400px',
        padding: '40px 30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Login Required
        </h2>
        
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ 
              backgroundColor: '#f8d7da', 
              color: '#721c24',
              padding: '10px 15px',
              borderRadius: '4px',
              marginBottom: '20px',
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </div>
          )}
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontSize: '16px'
              }}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontSize: '16px'
              }}
              placeholder="Enter password"
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            style={{ 
              width: '100%',
              padding: '14px',
              backgroundColor: isLoading ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s'
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div style={{ 
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          fontSize: '14px',
          color: '#666'
        }}>
          <p style={{ margin: '0 0 10px 0' }}>
            <strong>Demo Credentials:</strong>
          </p>
          <p style={{ margin: '5px 0' }}>Username: <code>admin</code></p>
          <p style={{ margin: '5px 0' }}>Password: <code>password123</code></p>
          <p style={{ margin: '10px 0 0 0', fontSize: '13px' }}>
            After login, you'll be redirected to your originally requested page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;