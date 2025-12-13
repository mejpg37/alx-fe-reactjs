const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Welcome to Advanced Routing Demo</h1>
        <p className="home-subtitle">
          This application demonstrates advanced React Router features:
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3 className="feature-title">Nested Routes</h3>
          <p className="feature-description">
            Create complex layouts with nested routing structures and shared layouts
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Dynamic Routing</h3>
          <p className="feature-description">
            Handle URLs with parameters for dynamic content loading
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3 className="feature-title">Protected Routes</h3>
          <p className="feature-description">
            Implement authentication-based route protection and redirects
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📍</div>
          <h3 className="feature-title">Route Parameters</h3>
          <p className="feature-description">
            Extract and use parameters from URLs for dynamic content
          </p>
        </div>
      </div>
      
      <div className="quick-guide">
        <h3 className="guide-title">Quick Navigation Guide:</h3>
        <ul className="guide-list">
          <li className="guide-item">
            <strong>Click "Profile"</strong> to see nested routing in action (requires login)
          </li>
          <li className="guide-item">
            <strong>Click "Posts"</strong> to see dynamic routing with URL parameters
          </li>
          <li className="guide-item">
            <strong>Try to access Profile without logging in</strong> to see protected routes redirect
          </li>
          <li className="guide-item">
            <strong>Use the sidebar in Profile</strong> to navigate between nested routes
          </li>
        </ul>
        
        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Password:</strong> password123</p>
        </div>
      </div>
      
      <style jsx>{`
        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .home-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          border-radius: 10px;
          color: white;
        }
        
        .home-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: white;
        }
        
        .home-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          color: white;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }
        
        .feature-card {
          background: white;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          text-align: center;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        
        .feature-title {
          color: #333;
          margin-bottom: 10px;
          font-size: 1.3rem;
        }
        
        .feature-description {
          color: #666;
          line-height: 1.5;
        }
        
        .quick-guide {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          margin-top: 30px;
        }
        
        .guide-title {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .guide-list {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }
        
        .guide-item {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #555;
          font-size: 1.1rem;
        }
        
        .guide-item:last-child {
          border-bottom: none;
        }
        
        .demo-credentials {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #28a745;
        }
        
        .demo-credentials h4 {
          color: #333;
          margin-bottom: 10px;
        }
        
        .demo-credentials p {
          margin: 5px 0;
          color: #555;
        }
        
        @media (max-width: 768px) {
          .home-title {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;