import { Outlet, NavLink } from 'react-router-dom';

const Profile = () => {
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;