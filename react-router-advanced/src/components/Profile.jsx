import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div style={{ display: 'flex', minHeight: '400px' }}>
      <div style={{ 
        width: '200px', 
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRight: '1px solid #ddd'
      }}>
        <h3>Profile Navigation</h3>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <NavLink 
            to="/profile" 
            end
            style={({ isActive }) => ({
              padding: '10px',
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#333',
              backgroundColor: isActive ? '#e7f1ff' : 'transparent',
              borderRadius: '4px',
              marginBottom: '5px'
            })}
          >
            Overview
          </NavLink>
          <NavLink 
            to="/profile/details"
            style={({ isActive }) => ({
              padding: '10px',
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#333',
              backgroundColor: isActive ? '#e7f1ff' : 'transparent',
              borderRadius: '4px',
              marginBottom: '5px'
            })}
          >
            Details
          </NavLink>
          <NavLink 
            to="/profile/settings"
            style={({ isActive }) => ({
              padding: '10px',
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#333',
              backgroundColor: isActive ? '#e7f1ff' : 'transparent',
              borderRadius: '4px',
              marginBottom: '5px'
            })}
          >
            Settings
          </NavLink>
        </nav>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route index element={
            <div>
              <h2>Profile Overview</h2>
              <p>Welcome to your profile dashboard!</p>
            </div>
          } />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;