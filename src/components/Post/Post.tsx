import { NavLink } from 'react-router-dom';
import './Post.scss';
import { Post as TPost } from '../../@Types/Post';

type PostProp = {
  post: TPost;
};

function Post({ post }: PostProp) {
  return (
    <article className="post">
      <NavLink to={`/article/${post.slug}`} className="post-title">
        {post.title}
      </NavLink>
      <div className="post-category">{post.category.name}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default Post;
