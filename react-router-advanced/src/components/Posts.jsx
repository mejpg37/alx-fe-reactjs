import { Link } from 'react-router-dom';

const posts = [
  { 
    id: 1, 
    title: 'Getting Started with React Router', 
    slug: 'getting-started-react-router',
    excerpt: 'Learn how to set up and configure React Router in your applications.',
    author: 'Jane Smith',
    date: '2024-01-15'
  },
  { 
    id: 2, 
    title: 'Advanced State Management in React', 
    slug: 'advanced-state-management',
    excerpt: 'Explore various state management solutions for large React applications.',
    author: 'John Doe',
    date: '2024-01-20'
  },
  { 
    id: 3, 
    title: 'Building Scalable React Applications', 
    slug: 'building-scalable-react-apps',
    excerpt: 'Best practices and patterns for building scalable React applications.',
    author: 'Bob Johnson',
    date: '2024-01-25'
  },
  { 
    id: 4, 
    title: 'React Performance Optimization Tips', 
    slug: 'react-performance-tips',
    excerpt: 'Techniques to optimize performance in React applications.',
    author: 'Alice Williams',
    date: '2024-01-30'
  },
  { 
    id: 5, 
    title: 'TypeScript with React: A Complete Guide', 
    slug: 'typescript-react-guide',
    excerpt: 'How to effectively use TypeScript in React projects.',
    author: 'Charlie Brown',
    date: '2024-02-05'
  },
  { 
    id: 6, 
    title: 'Testing React Applications with Jest', 
    slug: 'testing-react-jest',
    excerpt: 'Comprehensive guide to testing React components with Jest.',
    author: 'Diana Prince',
    date: '2024-02-10'
  }
];

const Posts = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Blog Posts</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Click on any post to see dynamic routing in action. Each post has a unique URL slug.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '25px',
        marginTop: '20px'
      }}>
        {posts.map(post => (
          <Link 
            key={post.id}
            to={`/posts/${post.slug}`}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'transform 0.3s, box-shadow 0.3s',
              backgroundColor: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '10px',
              fontSize: '0.9em',
              color: '#666'
            }}>
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>
            
            <h3 style={{ 
              margin: '10px 0',
              color: '#007bff'
            }}>
              {post.title}
            </h3>
            
            <p style={{ 
              margin: '15px 0',
              color: '#555',
              lineHeight: '1.6'
            }}>
              {post.excerpt}
            </p>
            
            <div style={{ 
              marginTop: '15px',
              color: '#007bff',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center'
            }}>
              Read more →
            </div>
          </Link>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h3>Dynamic Routing Demonstration</h3>
        <p>Each post link above uses dynamic routing:</p>
        <ul>
          <li>URL pattern: <code>/posts/:slug</code></li>
          <li>The <code>:slug</code> parameter changes for each post</li>
          <li>The PostDetail component extracts this parameter using <code>useParams()</code></li>
          <li>Try copying a post URL and pasting it in a new tab - it should work!</li>
        </ul>
      </div>
    </div>
  );
};

export default Posts;