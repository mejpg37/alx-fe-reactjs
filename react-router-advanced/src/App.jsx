import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Router>
      <div>
        <nav style={{
          backgroundColor: '#333',
          padding: '10px 20px',
          display: 'flex',
          gap: '20px'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
          <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>
            Blog
          </Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>
            Profile
          </Link>
          {!isAuthenticated ? (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Login
            </Link>
          ) : (
            <button 
              onClick={logout}
              style={{
                padding: '5px 15px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Logout
            </button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dynamic routing */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Protected route */}
          <Route path="/profile/*" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;