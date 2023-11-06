import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import Spinner from '../../components/Spinner/Spinner';
import { SinglePost } from '../../@Types/Post';

function Article() {
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');

  const {
    apiData: post,
    loading,
    error,
  } = useAsyncFetch<SinglePost>(
    `https://oblog-react.vercel.app/api/posts/${slug}`
  );

  if (error) throw error;

  return (
    <main>
      {loading && <Spinner />}
      {post && (
        <article>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </article>
      )}
    </main>
  );
}

export default Article;
