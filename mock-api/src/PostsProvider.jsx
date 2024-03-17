import React, { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Create Context
const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

// Create a Provider Component
export function PostsProvider({ children }) {
  const { data: posts, isLoading, isError, error } = useQuery('posts', () =>
    axios.get('/posts').then(res => res.data)
  );

  const [selectedPost, setSelectedPost] = useState(null);

  // Value to be passed to consuming components
  const value = {
    posts,
    isLoading,
    isError,
    error,
    selectedPost,
    setSelectedPost,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}