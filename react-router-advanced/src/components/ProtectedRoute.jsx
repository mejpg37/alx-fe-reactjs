import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();

  // Check localStorage for authentication status on mount
  const checkAuth = () => {
    if (isAuthenticated) return true;
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  };

  if (!checkAuth()) {
    // Redirect to login page but save the location they tried to visit
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;