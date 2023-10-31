import './Post.scss';
import { PostProp } from '../../@Types/Post';

type PoostProp = {
  post: PostProp;
};

function Post({ post }: PoostProp) {
  return (
    <article className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.name}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default Post;
