import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    hov: {
      cursor: 'pointer',
    },
    space: {
      margin:"15px",
    },
    right: {
      float: "right",
    },
    noLineBlack: {
      textDecoration: "none",
      color: "black",
    },
    noLineWhite: {
    textDecoration: "none",
    color: "white",
    }
  }


const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card notification is-white" style={styles.space}>
              <div className="card-content">
            <p className="title">{post.postTitle}</p>
            <p className="subtitle">Posted on {post.createdAt} by {post.postAuthor}.</p>
            <div className="content">
              {post.postText}
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
