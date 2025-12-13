import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import './App.css';  // Add this line

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navigation Header */}
        <header className="app-header">
          <div className="container header-content">
            <div className="logo-section">
              <h1 className="logo">RouterDemo</h1>
              <nav className="main-nav">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="auth-section">
              {isAuthenticated ? (
                <button 
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="login-btn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={
                <Login setIsAuthenticated={setIsAuthenticated} />
              } />
              
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:slug" element={<PostDetail />} />
              
              <Route path="/profile" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoute>
              }>
                <Route index element={
                  <div className="profile-overview">
                    <h2>Profile Overview</h2>
                    <p>Welcome to your profile dashboard! This is the default view for the profile route.</p>
                    <div className="info-box">
                      <h3>Nested Routing Demonstration</h3>
                      <p>This content is rendered as the index route of the Profile component.</p>
                      <p>Use the sidebar to navigate to:</p>
                      <ul>
                        <li><strong>Profile Details</strong> - View and manage your personal information</li>
                        <li><strong>Account Settings</strong> - Configure your account preferences</li>
                      </ul>
                    </div>
                  </div>
                } />
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="container">
            <p>Advanced Routing Demo - React Router v6</p>
            <p className="footer-subtitle">
              Demonstrating: Nested Routes • Dynamic Routing • Protected Routes
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;