import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostList from '../components/Postlist';
import { QUERY_POSTS } from '../utils/queries';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  space: {
    margin:"5px",
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

export default function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
    return (
      <div>
      

<div className="card notification is-white" id="port">
<PostList
              posts={posts}

            />
        </div>
</div>

    );
}