import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

import Spinner from '../../components/Spinner/Spinner';
import Posts from '../../components/Posts/Posts';

import { Post } from '../../@Types/Post';

function Category() {
  // Get URL slug
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug provided');

  // Custom hook to fetch all posts in a category with slug
  const { apiData: posts, loading } = useAsyncFetch<Post[]>(
    `https://oblog-react.vercel.app/api/posts?categorySlug=${slug}`
  );

  // Return spinner or posts depending on the API response
  return <main>{loading ? <Spinner /> : <Posts posts={posts || []} />}</main>;
}

export default Category;
