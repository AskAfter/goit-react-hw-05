import s from './ReviewCard.module.css';

const ReviewCard = ({ author, content }) => {
  return (
    <div className={s.container}>
      <h3 className={s.movieHeader}>Author: {author}</h3>
      <p>{content}</p>
    </div>
  );
};
export default ReviewCard;
