<<<<<<< HEAD
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
=======
<<<<<<< HEAD
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
>>>>>>> e5b92c36d38f2c132662fdfd4da0e31ba86e31b2
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-3 sm:my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
<<<<<<< HEAD
=======
=======
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
>>>>>>> cdbbdb17b0bdac585ec9bce303986344a1cc788d
>>>>>>> e5b92c36d38f2c132662fdfd4da0e31ba86e31b2
    </div>
  );
}

export default UserProfile;
