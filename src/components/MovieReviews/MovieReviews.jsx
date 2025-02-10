import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorComp from '../ErrorComp/ErrorComp';
import { fetchGetReview } from '../../services/api';
import ReviewList from '../ReviewList/ReviewList';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [review, setReview] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      try {
        setIsLoad(true);
        const data = await fetchGetReview(movieId);
        setReview(data.results);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };

    getCast();
  }, [movieId]);

  if (!review) {
    return <Loader />;
  }

  return (
    <div>
      {/* <h2>Reviews for {movie?.title}</h2> */}
      {isLoad && <Loader />}
      {isError && <ErrorComp />}
      {review && review.length > 0 ? (
        <ReviewList reviewList={review} />
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReviews;
