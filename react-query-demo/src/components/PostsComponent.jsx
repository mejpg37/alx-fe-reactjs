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
  const [page, setPage] = useState(1);
  
  const { 
    data: posts, 
    isLoading, 
    isError,
    error, 
    refetch,
    isFetching,
    isPreviousData 
  } = useQuery({
    queryKey: ['posts', refetchCount, page],
    queryFn: fetchPosts,
    staleTime: 5000,
    cacheTime: 10000,
    refetchOnWindowFocus: true,  // ← Add this line
    keepPreviousData: true,       // ← Add this line
  });

  const handleNextPage = () => {
    if (!isPreviousData) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setPage(prev => Math.max(prev - 1, 1));
  };

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
        {posts?.slice((page-1)*6, page*6).map(post => (
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
      
      <div style={{ 
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{ 
            padding: '10px 20px',
            backgroundColor: page === 1 ? '#cccccc' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: page === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous Page
        </button>
        
        <span>Page: {page}</span>
        
        <button
          onClick={handleNextPage}
          disabled={isPreviousData || (posts && page*6 >= posts.length)}
          style={{ 
            padding: '10px 20px',
            backgroundColor: isPreviousData ? '#cccccc' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isPreviousData ? 'not-allowed' : 'pointer'
          }}
        >
          Next Page
        </button>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li><strong>Caching:</strong> Data is cached for 10 seconds (check Network tab in DevTools)</li>
          <li><strong>Automatic Refetch:</strong> <code>refetchOnWindowFocus: true</code> triggers refetch when window is focused</li>
          <li><strong>Loading States:</strong> Separate states for initial load and refetching</li>
          <li><strong>Error Handling:</strong> Built-in error state management using <code>isError</code></li>
          <li><strong>Stale Time:</strong> Data considered fresh for 5 seconds</li>
          <li><strong>Keep Previous Data:</strong> <code>keepPreviousData: true</code> keeps previous data while fetching new data</li>
          <li><strong>Manual Refetching:</strong> Click "Refresh Posts" to manually trigger data refetch</li>
        </ul>
        
        <h4>How to test caching:</h4>
        <ol>
          <li>Load the page - initial API call happens</li>
          <li>Navigate to another tab and come back - automatic refetch triggers if data is stale</li>
          <li>Click between pages - previous data is kept while new data loads</li>
          <li>Check Network tab in DevTools to see cached requests</li>
        </ol>
        
        <p><strong>Note:</strong> Window focus refetch only happens when <code>refetchOnWindowFocus</code> is set to true.</p>
      </div>
    </div>
  );
};

export default PostsComponent;