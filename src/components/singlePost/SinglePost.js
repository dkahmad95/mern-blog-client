import { useContext, useEffect, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import apiUrl from "../../apiUrl";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // to extract the id of the post
  const PF = process.env.REACT_APP_PF
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdatemode] = useState(false);
  const [post, setPost] = useState({});


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${apiUrl()}posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);



  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl()}posts/`+ path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };


  const handleUpdate = async ()=> {
    

    try{
     await axios.put(`${apiUrl()}posts/` + path, {   username: user.username , title ,desc })
     window.location.reload();
     
    } catch(err) {

    }
  }


  return (

    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e)=> setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdatemode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
           <span>Author:  </span> 
           <span>
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea className="singlePostDescInput" value={desc} onChange={(e)=> setDesc(e.target.value)} />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
     
      {updateMode &&
      <button className="singlePostButton"
      onClick={handleUpdate}
      > update</button>
      } 
      </div>
    </div>
  );
};

export default SinglePost;
