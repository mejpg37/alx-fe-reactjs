function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #e0e0e0', 
      padding: '25px', 
      margin: '20px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        marginBottom: '20px',
        fontSize: '1.8rem',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px',
        textAlign: 'center'
      }}>
        {props.name}
      </h2>
      <div style={{ fontSize: '1.2rem', margin: '12px 0', lineHeight: '1.6' }}>
        <strong style={{ color: '#2c3e50' }}>Age:</strong> 
        <span style={{ 
          fontWeight: 'bold', 
          color: '#e74c3c',
          marginLeft: '8px',
          fontSize: '1.3rem'
        }}>
          {props.age}
        </span>
      </div>
      <div style={{ margin: '15px 0' }}>
        <strong style={{ color: '#2c3e50', fontSize: '1.2rem' }}>Bio:</strong>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#7f8c8d',
          fontStyle: 'italic',
          lineHeight: '1.6',
          margin: '10px 0 0 0',
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px',
          borderLeft: '4px solid #3498db'
        }}>
          {props.bio}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
