import Post from '../Post/Post';
import './Posts.scss';
import { PostProp } from '../../@Types/Post';

type PostsProps = {
  posts: PostProp[];
};

function Posts({ posts }: PostsProps) {
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Posts;
