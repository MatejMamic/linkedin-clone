import PostContent from "../postContent/PostContent";

import "./Post.scss";
import PostFooter from "../postFooter/PostFooter";
import PostHeader from "../postHeader/PostHeader";
export default function Post({ post }) {
  return (
    <div className="post">
      <PostHeader
        avatar={post.avatar}
        fullname={post.fullname}
        title={post.title}
      />
      <PostContent caption={post.caption} img={post.img} />
      <PostFooter />
    </div>
  );
}
