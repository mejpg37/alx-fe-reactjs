import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Getting Started with React Router' },
    { id: 2, title: 'Advanced State Management' },
    { id: 3, title: 'Building Scalable Apps' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {posts.map(post => (
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              textDecoration: 'none',
              color: '#333'
            }}
          >
            <h3 style={{ marginTop: 0 }}>{post.title}</h3>
            <p>Click to read more...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog; 