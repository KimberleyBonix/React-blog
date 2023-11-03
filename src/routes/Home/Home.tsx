import { Post } from '../../@Types/Post';
import Posts from '../../components/Posts/Posts';
import Spinner from '../../components/Spinner/Spinner';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

function Home() {
  const { apiData: posts, loading } = useAsyncFetch<Post[]>(
    'https://oblog-react.vercel.app/api/posts'
  );
  return (
    <main>
      {loading && <Spinner />}
      <Posts posts={posts || []} />
    </main>
  );
}

export default Home;
