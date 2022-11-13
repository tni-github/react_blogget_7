import style from './Post.module.css';
import PropTypes from 'prop-types';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';

export const Post = (postData) => {
  <li className={style.post}>
    <Photo src={postData.postData.thumbnail} alt={postData.postData.title}/>
    <ContentPost title={postData.postData.title}
      author={postData.postData.author}/>
    <Rating rating={postData.postData.ups} />
    <PublicationDate date={postData.postData.created}/>
    <DelButton />
  </li>;
};

Post.propTypes = {
  postData: PropTypes.object,
};
