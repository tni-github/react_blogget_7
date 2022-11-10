import style from './PublicationDate.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const PublicationDate = ({ date }) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);

PublicationDate.propTypes = {
  date: PropTypes.string,
};
