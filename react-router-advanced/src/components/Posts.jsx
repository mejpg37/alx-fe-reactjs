import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const location = useLocation();

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '500px'
    }}>
      <div style={{ 
        display: 'flex', 
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Sidebar */}
        <div style={{ 
          width: '250px', 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRight: '1px solid #ddd'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <h3>User Profile</h3>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              marginTop: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px'
              }}>
                JD
              </div>
              <div>
                <strong>John Doe</strong>
                <p style={{ margin: 0, color: '#666' }}>Administrator</p>
              </div>
            </div>
          </div>
          
          <nav>
            <h4>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '5px' }}>
                <NavLink 
                  to="/profile" 
                  end
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '10px 15px',
                    textDecoration: 'none',
                    color: isActive ? '#007bff' : '#333',
                    backgroundColor: isActive ? '#e7f1ff' : 'transparent',
                    borderRadius: '4px',
                    borderLeft: isActive ? '4px solid #007bff' : '4px solid transparent',
                    transition: 'all 0.3s'
                  })}
                >
                  Overview
                </NavLink>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <NavLink 
                  to="/profile/details"
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '10px 15px',
                    textDecoration: 'none',
                    color: isActive ? '#007bff' : '#333',
                    backgroundColor: isActive ? '#e7f1ff' : 'transparent',
                    borderRadius: '4px',
                    borderLeft: isActive ? '4px solid #007bff' : '4px solid transparent',
                    transition: 'all 0.3s'
                  })}
                >
                  Profile Details
                </NavLink>
              </li>
              <li style={{ marginBottom: '5px' }}>
                <NavLink 
                  to="/profile/settings"
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '10px 15px',
                    textDecoration: 'none',
                    color: isActive ? '#007bff' : '#333',
                    backgroundColor: isActive ? '#e7f1ff' : 'transparent',
                    borderRadius: '4px',
                    borderLeft: isActive ? '4px solid #007bff' : '4px solid transparent',
                    transition: 'all 0.3s'
                  })}
                >
                  Account Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Main Content Area */}
        <div style={{ 
          flex: 1, 
          padding: '30px',
          backgroundColor: 'white'
        }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h2>Profile Overview</h2>
                <p>Welcome to your profile dashboard! This is the default view for the profile route.</p>
                <div style={{ 
                  marginTop: '20px',
                  padding: '20px',
                  backgroundColor: '#f0f8ff',
                  borderRadius: '8px'
                }}>
                  <h3>Nested Routing Demonstration</h3>
                  <p>This content is rendered as the index route of the Profile component.</p>
                  <p>Use the sidebar to navigate to:</p>
                  <ul>
                    <li><strong>Profile Details</strong> - View and manage your personal information</li>
                    <li><strong>Account Settings</strong> - Configure your account preferences</li>
                  </ul>
                  <div style={{ 
                    marginTop: '15px',
                    padding: '10px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}>
                    <p><strong>Current URL:</strong> {location.pathname}</p>
                    <p><strong>Routes Component:</strong> Using React Router's Routes and Route components</p>
                  </div>
                </div>
              </div>
            } />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Routes>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h4>Nested Routes Implementation Details:</h4>
        <p>This Profile component demonstrates nested routing using:</p>
        <ul>
          <li><code>&lt;Routes&gt;</code> component to define route boundaries</li>
          <li><code>&lt;Route&gt;</code> components for each nested route</li>
          <li><code>ProfileDetails</code> component for the /details route</li>
          <li><code>ProfileSettings</code> component for the /settings route</li>
          <li>Relative paths for nested routes</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;