import "./PostComment.css";
import React, { useEffect, useState } from "react";


const PostComment = (props) => {
  const commentId = props.id;
  // console.log(commentId);
  // const location = useLocation();

  const [comment, setComment] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // const commentId = location.state;
    showComment(commentId);
  }, [commentId]);

  // console.log(id)
  const showComment = async (commentId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`
    );
    const comments = await res.json();
    // console.log(comments);
    setComment(comments);
  };

  return (
    <>
      {/* {visible && setComment(commentId) } */}

      <button
        className="btn btn-text"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        View Comments
      </button>
      {visible &&
        comment.map((com) => {
          const { id, name, email, body } = com;
        return (
            <>
              <div className="post">
                <p className="uid">{id}</p>
                <h3 className="title">{name}</h3>
                <h4 className="desc">{email}</h4>
                <p className="desc">{body}</p>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PostComment;
