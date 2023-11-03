import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import Post from '../../components/Post/Post';
import Spinner from '../../components/Spinner/Spinner';
import { Post as TPost } from '../../@Types/Post';

function Article() {
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');

  const { apiData: post, loading } = useAsyncFetch<TPost>(
    `https://oblog-react.vercel.app/api/posts/${slug}`
  );

  return (
    <main>
      {loading && <Spinner />}
      {post && <Post post={post} />}
    </main>
  );
}

export default Article;
