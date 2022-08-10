import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const POSTS_URL =
  'https://api.pushshift.io/reddit/search/submission/?subreddit=reactnative&sort=desc&sort_type=created_utc&size=1000';

const useRedditPosts = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const data = (await axios.get(POSTS_URL)).data;
      const results = data.data;
      setPosts(results);
    } catch (error) {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setPosts]);

  const retryFetchPosts = () => {
    setPosts([]);
    setLoading(true);

    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {posts, isLoading, retryFetchPosts};
};

export {useRedditPosts};
