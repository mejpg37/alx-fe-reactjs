function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto',
      borderTop: '4px solid #3498db'
    }}>
      <p style={{ 
        margin: '5px 0',
        fontSize: '1rem'
      }}>
        © 2024 My React App. All rights reserved.
      </p>
      <p style={{ 
        margin: '5px 0',
        fontSize: '0.9rem',
        color: '#bdc3c7'
      }}>
        Built with React and inline CSS styling
      </p>
    </footer>
  );
}

export default Footer;