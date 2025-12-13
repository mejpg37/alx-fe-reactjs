import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation - check if fields are empty
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (Object.keys(newErrors).length === 0) {
      try {
        // Mock API call
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password })
        });
        
        if (response.ok) {
          alert('Registration successful!');
          // Reset form
          setUsername('');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '30px auto',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      border: '1px solid #dee2e6'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '25px',
        paddingBottom: '10px',
        borderBottom: '2px solid #007bff'
      }}>
        User Registration (Controlled Components)
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors({...errors, username: ''});
            }}
            placeholder="Enter username"
            style={{ 
              width: '100%', 
              padding: '12px',
              borderRadius: '5px',
              border: `1px solid ${errors.username ? '#dc3545' : '#ced4da'}`,
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          {errors.username && (
            <div style={{ 
              color: '#dc3545', 
              fontSize: '14px',
              marginTop: '5px',
              padding: '5px 10px',
              backgroundColor: '#f8d7da',
              borderRadius: '3px'
            }}>
              {errors.username}
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({...errors, email: ''});
            }}
            placeholder="Enter email"
            style={{ 
              width: '100%', 
              padding: '12px',
              borderRadius: '5px',
              border: `1px solid ${errors.email ? '#dc3545' : '#ced4da'}`,
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          {errors.email && (
            <div style={{ 
              color: '#dc3545', 
              fontSize: '14px',
              marginTop: '5px',
              padding: '5px 10px',
              backgroundColor: '#f8d7da',
              borderRadius: '3px'
            }}>
              {errors.email}
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="password" style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({...errors, password: ''});
            }}
            placeholder="Enter password"
            style={{ 
              width: '100%', 
              padding: '12px',
              borderRadius: '5px',
              border: `1px solid ${errors.password ? '#dc3545' : '#ced4da'}`,
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          {errors.password && (
            <div style={{ 
              color: '#dc3545', 
              fontSize: '14px',
              marginTop: '5px',
              padding: '5px 10px',
              backgroundColor: '#f8d7da',
              borderRadius: '3px'
            }}>
              {errors.password}
            </div>
          )}
        </div>
        
        <button 
          type="submit" 
          style={{ 
            width: '100%',
            padding: '14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;