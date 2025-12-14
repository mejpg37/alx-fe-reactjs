import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // Must use "id" not "slug"
  const navigate = useNavigate();

  const postContent = {
    1: {
      title: 'Getting Started with React Router',
      content: 'This is the content for getting started with React Router...',
    },
    2: {
      title: 'Advanced State Management',
      content: 'This is the content for advanced state management...',
    },
    3: {
      title: 'Building Scalable Apps',
      content: 'This is the content for building scalable applications...',
    }
  };

  const post = postContent[id];

  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Post not found</h2>
        <button onClick={() => navigate('/blog')}>Back to Blog</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/blog')} style={{ marginBottom: '20px' }}>
        ← Back to Blog
      </button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default BlogPost;