import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';

// Create a client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,  // This can also be set globally here
      retry: 1,
      staleTime: 5000,
      cacheTime: 10000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;