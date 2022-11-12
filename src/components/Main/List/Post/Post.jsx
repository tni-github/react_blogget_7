import style from './Post.module.css';
import PropTypes from 'prop-types';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';

export const Post = (postData) => {
  <li className={style.post}>
    <Photo src={postData.thumbnail} alt={postData.title}/>
    <ContentPost title={postData.title} author={postData.author}/>
    <Rating rating={postData.ups} />
    <PublicationDate date={postData.created}/>
    <DelButton />
  </li>;
};

Post.propTypes = {
  postData: PropTypes.object,
};
