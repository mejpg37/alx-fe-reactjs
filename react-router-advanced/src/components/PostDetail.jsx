import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const postContent = {
    'getting-started': {
      title: 'Getting Started with React Router',
      content: 'This is the content for getting started with React Router...',
    },
    'advanced-state': {
      title: 'Advanced State Management',
      content: 'This is the content for advanced state management...',
    },
    'scalable-apps': {
      title: 'Building Scalable Apps',
      content: 'This is the content for building scalable applications...',
    }
  };

  const post = postContent[slug];

  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Post not found</h2>
        <button onClick={() => navigate('/posts')}>Back to Posts</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/posts')} style={{ marginBottom: '20px' }}>
        ← Back to Posts
      </button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default PostDetail;