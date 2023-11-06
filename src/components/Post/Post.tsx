import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './Post.scss';
import { Post as TPost } from '../../@Types/Post';

type PostProp = {
  post: TPost;
};

function Post({ post }: PostProp) {
  const purifiedHTML = DOMPurify.sanitize(post.excerpt);

  return (
    <article className="post">
      <Link to={`/article/${post.slug}`} className="post-title">
        {post.title}
      </Link>
      <div className="post-category">{post.category.name}</div>
      <p
        className="post-excerpt"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: purifiedHTML }}
      />
    </article>
  );
}

export default Post;
