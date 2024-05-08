import "./PostContent.scss";
export default function PostContent({ caption, img }) {
  return (
    <div className="post-content">
      <p className="post-content_text">{caption}</p>
      <img className="post-content__img" src={img} alt="content" />
    </div>
  );
}
