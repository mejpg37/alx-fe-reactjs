function MainContent() {
  return (
    <main style={{
      padding: '30px',
      backgroundColor: '#ecf0f1',
      minHeight: '400px',
      borderLeft: '3px solid #3498db',
      borderRight: '3px solid #3498db'
    }}>
      <h2 style={{
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '1.8rem'
      }}>
        Welcome to Our Application
      </h2>
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#34495e',
        textAlign: 'justify',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        This is the main content area where you can find all the important information 
        about our application and its features. Explore the user profiles and enjoy 
        the beautifully styled components!
      </p>
    </main>
  );
}

export default MainContent; 