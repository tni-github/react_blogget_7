import style from './Post.module.css';
import PropTypes from 'prop-types';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';

export const Post = ({ postData }) => {
  const { thumbnail, title, author, ups, date } = postData;

  return (
    <li className={style.post}>
      <Photo src={thumbnail} alt={title}/>
      <ContentPost title={title} author={author}/>
      <Rating rating={ups} />
      <PublicationDate date={date}/>
      <DelButton />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
