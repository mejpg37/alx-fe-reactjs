const ProfileDetails = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    joined: 'January 15, 2023',
    bio: 'Senior software developer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable web applications.',
    skills: ['React', 'JavaScript', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Profile Details</h2>
      
      <div style={{ 
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div>
            <h4 style={{ color: '#666', marginBottom: '10px' }}>Personal Information</h4>
            <p><strong>Full Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>Location:</strong> {userInfo.location}</p>
            <p><strong>Member Since:</strong> {userInfo.joined}</p>
          </div>
          
          <div>
            <h4 style={{ color: '#666', marginBottom: '10px' }}>About</h4>
            <p>{userInfo.bio}</p>
          </div>
        </div>
        
        <div>
          <h4 style={{ color: '#666', marginBottom: '15px' }}>Skills & Expertise</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {userInfo.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#e7f1ff',
                  color: '#007bff',
                  borderRadius: '20px',
                  fontSize: '14px'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h4>Nested Route Information</h4>
        <p>This component is rendered as a nested route within the Profile component.</p>
        <p>Notice the URL: <code>/profile/details</code> - this shows nested routing in action.</p>
      </div>
    </div>
  );
};

export default ProfileDetails;