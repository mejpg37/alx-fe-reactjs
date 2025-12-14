const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <div>
        <label>
          <input type="checkbox" /> Email notifications
        </label>
      </div>
      <button style={{ 
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        marginTop: '10px'
      }}>
        Save Settings
      </button>
    </div>
  );
};

export default ProfileSettings;