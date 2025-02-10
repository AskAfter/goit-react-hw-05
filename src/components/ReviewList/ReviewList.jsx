import ReviewCard from '../ReviewCard/ReviewCard';
import s from './ReviewList.module.css';
const ReviewList = ({ reviewList }) => {
  const markup = reviewList.map(review => {
    return (
      <li key={review.id}>
        <ReviewCard author={review.author} content={review.content} />
      </li>
    );
  });
  return <ul className={s.list}>{markup}</ul>;
};
export default ReviewList;
