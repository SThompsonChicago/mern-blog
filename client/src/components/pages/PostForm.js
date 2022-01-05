import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = () => {
  const [formState, setPostText] = useState({
    postTitle: '',
    postText: '',
    postAuthor: ''
  });



  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          ...formState,
          postAuthor: Auth.getProfile().data.username,
        },
      });

    } catch (err) {
      console.error(err);
    }

    setPostText({
      postTitle: '',
      postText: '',
      postAuthor: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      setPostText({
          ...formState,
          [name]: value,
      });
  
};


  return (
    <div className="card notification is-black">
    <div className="card">
        <div className="card-content notification is-black">
        <p className="title is-4 is-size-6-mobile">
                        Create a new post
                    </p>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
            <textarea
                name="postTitle"
                placeholder="Title"
                value={formState.postTitle}
                className="textarea"
                rows="2"
                onChange={handleChange}
              ></textarea>
              <br>
              </br>
              <textarea
                name="postText"
                placeholder="Type here"
                value={formState.postText}
                className="textarea" 
                rows="20"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button 
              className="button is-link is-size-6-mobile"
              type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          To create a new post, you must{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
    </div>
    </div>
  );
};

export default PostForm;
