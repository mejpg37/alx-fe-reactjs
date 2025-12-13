import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [refetchCount, setRefetchCount] = useState(0);
  
  const { 
    data: posts, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useQuery({
    queryKey: ['posts', refetchCount],
    queryFn: fetchPosts,
    staleTime: 5000, // Consider data fresh for 5 seconds
    cacheTime: 10000, // Keep unused data in cache for 10 seconds
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts (React Query Demo)</h1>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => {
            setRefetchCount(prev => prev + 1);
            refetch();
          }}
          disabled={isFetching}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
        <span>Refresh count: {refetchCount}</span>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px' 
      }}>
        {posts?.slice(0, 12).map(post => (
          <div 
            key={post.id} 
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ marginTop: 0 }}>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '10px',
              fontSize: '0.8em',
              color: '#666'
            }}>
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li><strong>Caching:</strong> Data is cached for 10 seconds (check Network tab in DevTools)</li>
          <li><strong>Automatic Refetch:</strong> Window focus triggers refetch by default</li>
          <li><strong>Loading States:</strong> Separate states for initial load and refetching</li>
          <li><strong>Error Handling:</strong> Built-in error state management</li>
          <li><strong>Stale Time:</strong> Data considered fresh for 5 seconds</li>
        </ul>
        <p>
          <strong>Try this:</strong> 
          Click away from browser tab and come back to see automatic refetch,
          or click "Refresh Posts" to manually refetch
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;