import React from 'react';
import PropTypes from 'prop-types';
import { usePopularPosts } from '../hooks/usePopularPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
  const [popularPosts] = usePopularPosts();
  console.log('popularPosts from postContext: ', popularPosts);

  return (
    <postsContext.Provider value={{ popularPosts }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
