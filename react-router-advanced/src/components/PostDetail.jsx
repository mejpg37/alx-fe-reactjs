import { useParams, useNavigate } from 'react-router-dom';

const postContent = {
  'getting-started-react-router': {
    title: 'Getting Started with React Router',
    content: 'React Router is a powerful routing library for React applications that enables navigation between different components in your app while maintaining a clean URL structure.',
    fullContent: `React Router is a powerful routing library for React applications that enables navigation between different components in your app while maintaining a clean URL structure.

## Key Features

1. **Declarative Routing**: Define your routes using JSX components
2. **Nested Routes**: Create complex layouts with nested routing
3. **Dynamic Routing**: Handle URLs with parameters
4. **Programmatic Navigation**: Navigate programmatically using hooks
5. **Protected Routes**: Implement authentication-based routing

## Installation

\`\`\`bash
npm install react-router-dom
\`\`\`

## Basic Setup

\`\`\`jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
\`\`\`

This is just the beginning of what you can do with React Router. The library provides many more advanced features for complex routing scenarios.`,
    author: 'Jane Smith',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  'advanced-state-management': {
    title: 'Advanced State Management in React',
    content: 'State management is crucial for React applications. Learn about different approaches beyond useState.',
    fullContent: `State management is crucial for React applications. Learn about different approaches beyond useState.

## State Management Solutions

### 1. Context API
Ideal for passing data through the component tree without prop drilling.

### 2. Redux
Predictable state container for JavaScript apps.

### 3. Zustand
Minimalist state management solution.

### 4. MobX
Simple, scalable state management.

## Choosing the Right Tool

The choice depends on your application's complexity and requirements.`,
    author: 'John Doe',
    date: '2024-01-20',
    readTime: '8 min read'
  },
  'building-scalable-react-apps': {
    title: 'Building Scalable React Applications',
    content: 'Learn best practices for building React applications that scale with your user base.',
    fullContent: `Learn best practices for building React applications that scale with your user base.

## Scalability Principles

1. **Component Design**: Create reusable, modular components
2. **State Management**: Choose appropriate state management
3. **Performance Optimization**: Implement code splitting, lazy loading
4. **Testing Strategy**: Comprehensive testing approach
5. **Documentation**: Maintain good documentation

These practices ensure your app remains maintainable as it grows.`,
    author: 'Bob Johnson',
    date: '2024-01-25',
    readTime: '10 min read'
  }
};

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = postContent[slug];

  if (!post) {
    return (
      <div style={{ 
        padding: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2>Post Not Found</h2>
        <p>The post you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/posts')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <button 
        onClick={() => navigate('/posts')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        ← Back to Posts
      </button>
      
      <article style={{ 
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid #eee'
        }}>
          <h1 style={{ margin: '0 0 10px 0' }}>{post.title}</h1>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#666'
          }}>
            <div>
              <span>By <strong>{post.author}</strong></span>
              <span style={{ margin: '0 10px' }}>•</span>
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div style={{ 
          lineHeight: '1.8',
          fontSize: '16px',
          color: '#333'
        }}>
          {post.fullContent.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '15px' }}>
              {paragraph}
            </p>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h4>Dynamic Routing Information</h4>
          <p>Current URL parameter (slug): <code>{slug}</code></p>
          <p>This page is rendered dynamically based on the URL parameter.</p>
          <p>Try changing the slug in the URL to see different posts.</p>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;