import style from './Post.module.css';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';
import { postsContext } from '../../../../context/postsContext';
import { useContext } from 'react';

export const Post = () => {
  const { popularPosts } = useContext(postsContext);

  return (
    popularPosts.map((postData) => (
      <li key={postData.data.id} className={style.post}>
        <Photo src={postData.data.thumbnail} alt={postData.data.title}/>
        <ContentPost title={postData.data.title}
          author={postData.data.author}/>
        <Rating rating={postData.data.ups} />
        <PublicationDate date={postData.data.created}/>
        <DelButton />
      </li>
    ))
  );
};

