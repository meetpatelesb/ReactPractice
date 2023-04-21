import './PostComment.css';
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";


const PostComment = () => {

   const location = useLocation();

  const [comment, setComment] = useState([]);

  
  useEffect(() => {
    const id = location.state;
    console.log(id+"in")
    showComment(id);
  }, [location]);

  // console.log(id)
  const showComment = async (commentId) => {
    console.log(commentId)
 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}/comments`)
    const comment = await res.json();
    setComment(comment)
    console.log(comment);
  }

  return(
    <>
      <p>{comment}</p>
    </>
  )

}


export default PostComment;