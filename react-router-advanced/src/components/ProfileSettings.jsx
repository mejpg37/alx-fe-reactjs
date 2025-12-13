import { useState } from 'react';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    newsletter: true,
    theme: 'light',
    language: 'en'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Account Settings</h2>
      
      <div style={{ 
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '15px' }}>Notification Preferences</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
              />
              Email Notifications
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
              />
              Push Notifications
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="newsletter"
                checked={settings.newsletter}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
              />
              Weekly Newsletter
            </label>
          </div>
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '15px' }}>Display Settings</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Theme:</label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                style={{ padding: '8px', width: '200px', borderRadius: '4px' }}
              >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Language:</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                style={{ padding: '8px', width: '200px', borderRadius: '4px' }}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSave}
          style={{
            padding: '12px 30px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Save Settings
        </button>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h4>Dynamic Component Update</h4>
        <p>This component demonstrates state management within a nested route.</p>
        <p>Changes are saved locally in component state (in a real app, this would sync with a backend).</p>
      </div>
    </div>
  );
};

export default ProfileSettings;