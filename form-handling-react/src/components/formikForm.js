import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // This MUST contain the EXACT string: string().required
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
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
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ width: '100%', padding: '8px' }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: '100%', padding: '8px' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: '100%', padding: '8px' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ padding: '10px 20px' }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;