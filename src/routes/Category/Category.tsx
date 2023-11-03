import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

import Spinner from '../../components/Spinner/Spinner';
import Posts from '../../components/Posts/Posts';

import { Post } from '../../@Types/Post';

function Category() {
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug provided');

  const { apiData: posts, loading } = useAsyncFetch<Post[]>(
    `https://oblog-react.vercel.app/api/posts?categorySlug=${slug}`
  );

  return <main>{loading ? <Spinner /> : <Posts posts={posts || []} />}</main>;
}

export default Category;
