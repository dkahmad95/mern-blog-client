import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = process.env.REACT_APP_PF
 
  
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
    
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span key={index} className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}