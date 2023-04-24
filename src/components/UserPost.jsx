import "./UserPost.css";
import PostComment from "./PostComment";
import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";

const UserPost = () => {
  const location = useLocation();

  const [post, setPost] = useState([]);
   const [visible, setVisible] = useState(5);

  
  useEffect(() => {
    const id = location.state;
    showPost(id);
  }, [location]);

   const loadMore = async () => {
        setVisible(prevValue => prevValue + 5)
    }
  
  const showPost = async (id) => {

    const res =   await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const post = await res.json();
    // console.log(post)
    setPost(post) 
    // console.log(post+"post")

  };  
  let postCount = 0;
  return (
    <>
      <h2 className="heading">Posts</h2>
      <div className="posts">
      {post &&
        post.slice(0,visible).map((upost) => {
          postCount++;
          return (
            <div className="post">
            
            <p className="uid">{upost.userId}.{postCount}</p>
              <p className="uid">{upost.id}</p>
              <h3 className="title">{upost.title}</h3>
              <h5 className="desc">{upost.body}</h5>
              <PostComment id={upost.id}/>
              {/* <button className="btn"><Link to={'/post-comment'} state={upost.id} className="btn-text">Views Comments</Link></button> */}
            </div>
          );
        })}
        </div>
        <button className="back-btn btn-text" onClick={loadMore}>More Posts</button>
        <button className="back-btn btn-text"><Link to= {'/'} className="btn-text">BACK</Link></button>
    </>
  );
};

export default UserPost;
