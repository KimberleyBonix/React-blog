import { Post } from '../../@Types/Post';
import Posts from '../../components/Posts/Posts';
import Spinner from '../../components/Spinner/Spinner';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

function Home() {
  // Custom hook to fetch all posts
  const { apiData: posts, loading } = useAsyncFetch<Post[]>(
    'https://oblog-react.vercel.app/api/posts'
  );
  return (
    <main>
      {/* If loading is true -> display Spinner component */}
      {loading && <Spinner />}
      <Posts posts={posts || []} />
    </main>
  );
}

export default Home;
