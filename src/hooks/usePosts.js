import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';

export const usePosts = () => {
  const [bestPosts] = useState([]);
  const [posts] = useState([
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-11-04T09:45:00.000Z',
      id: '121',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 24,
      date: '2022-10-29T03:15:21.000Z',
      id: '504',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 50,
      date: '2022-10-20T00:01:15.000Z',
      id: '739',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 33,
      date: '2022-09-25T11:37:00.000Z',
      id: '949',
    },
  ]);

  useEffect(() => {
    fetch(`${URL_API}/best`)
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        data.map((post) => {
          if (post.ups > 50) {
            bestPosts.push(data);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [posts]);

  console.log(posts);
  return [posts, bestPosts];
};
