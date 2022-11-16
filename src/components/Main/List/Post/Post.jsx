import style from './Post.module.css';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';
import PropTypes from 'prop-types';

export const Post = ({ dataPost }) => (
  <li className={style.post}>
    <Photo src={dataPost.thumbnail}
      alt={dataPost.title}/>
    <ContentPost title={dataPost.title}
      author={dataPost.author}/>
    <Rating rating={dataPost.ups} />
    <PublicationDate date={dataPost.created}/>
    <DelButton />
  </li>
);

Post.propTypes = {
  dataPost: PropTypes.object,
};
