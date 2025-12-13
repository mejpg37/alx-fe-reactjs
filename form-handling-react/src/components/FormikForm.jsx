import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      
      if (response.ok) {
        alert('Registration successful with Formik!');
        resetForm();
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setSubmitting(false);
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
        borderBottom: '2px solid #28a745'
      }}>
        User Registration (Formik)
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="username" style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#555'
              }}>
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                style={{ 
                  width: '100%', 
                  padding: '12px',
                  borderRadius: '5px',
                  border: `1px solid ${errors.username && touched.username ? '#dc3545' : '#ced4da'}`,
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              <ErrorMessage name="username">
                {msg => (
                  <div style={{ 
                    color: '#dc3545', 
                    fontSize: '14px',
                    marginTop: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#f8d7da',
                    borderRadius: '3px'
                  }}>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
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
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                style={{ 
                  width: '100%', 
                  padding: '12px',
                  borderRadius: '5px',
                  border: `1px solid ${errors.email && touched.email ? '#dc3545' : '#ced4da'}`,
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              <ErrorMessage name="email">
                {msg => (
                  <div style={{ 
                    color: '#dc3545', 
                    fontSize: '14px',
                    marginTop: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#f8d7da',
                    borderRadius: '3px'
                  }}>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
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
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                style={{ 
                  width: '100%', 
                  padding: '12px',
                  borderRadius: '5px',
                  border: `1px solid ${errors.password && touched.password ? '#dc3545' : '#ced4da'}`,
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              <ErrorMessage name="password">
                {msg => (
                  <div style={{ 
                    color: '#dc3545', 
                    fontSize: '14px',
                    marginTop: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#f8d7da',
                    borderRadius: '3px'
                  }}>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                width: '100%',
                padding: '14px',
                backgroundColor: isSubmitting ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#218838')}
              onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#28a745')}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            
            <div style={{ 
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#e7f3ff',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#0c5460'
            }}>
              <strong>Formik Features:</strong>
              <ul style={{ margin: '10px 0 0 20px', padding: 0 }}>
                <li>Built-in form state management</li>
                <li>Yup validation schema</li>
                <li>Automatic error messages</li>
                <li>Form submission handling</li>
              </ul>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;