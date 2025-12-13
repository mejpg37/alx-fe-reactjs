const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About This Application</h1>
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>Features Demonstrated:</h3>
        <ul>
          <li><strong>Nested Routes:</strong> Profile section with sub-routes (Details, Settings)</li>
          <li><strong>Dynamic Routing:</strong> Blog posts with dynamic URLs (/posts/:slug)</li>
          <li><strong>Protected Routes:</strong> Authentication-required routes with redirect</li>
          <li><strong>Programmatic Navigation:</strong> Navigation through code</li>
          <li><strong>Route Parameters:</strong> Extracting parameters from URLs</li>
        </ul>
        
        <h3>Technologies Used:</h3>
        <ul>
          <li>React 18</li>
          <li>React Router DOM 6</li>
          <li>Vite for build tooling</li>
        </ul>
      </div>
    </div>
  );
};

export default About;