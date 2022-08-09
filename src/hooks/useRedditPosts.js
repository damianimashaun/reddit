import axios from 'axios';
import {useEffect, useState} from 'react';

const POSTS_URL =
  'https://api.pushshift.io/reddit/search/submission/?subreddit=reactnative&sort=desc&sort_type=created_utc&size=1000';

const useRedditPosts = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await axios.get(POSTS_URL)).data;
      const results = data.data;
      setPosts(results);
      setLoading(false);
      console.log({a: results.length});
    };

    fetchPosts();
  }, []);

  return {posts, isLoading};
};

export {useRedditPosts};
