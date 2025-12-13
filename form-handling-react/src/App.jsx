import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.jsx';
import './App.css';

function App() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px',
        paddingBottom: '10px',
        borderBottom: '3px solid #6f42c1'
      }}>
        React Form Handling Demo
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center'
      }}>
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '550px' }}>
          <RegistrationForm />
        </div>
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '550px' }}>
          <FormikForm />
        </div>
      </div>
      
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '40px auto'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Demo Instructions:</h3>
        <ol style={{ marginLeft: '20px' }}>
          <li>Try submitting empty forms to see validation errors</li>
          <li>Enter invalid email format to test email validation</li>
          <li>Enter password less than 6 characters to test password validation</li>
          <li>Try valid inputs and submit to see success message</li>
        </ol>
      </div>
    </div>
  );
}

export default App;