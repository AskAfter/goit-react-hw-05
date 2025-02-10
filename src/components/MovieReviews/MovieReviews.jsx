import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/MovieContext';
import Loader from '../Loader/Loader';
import ErrorComp from '../ErrorComp/ErrorComp';
import { fetchGetReview } from '../../services/api';
import ReviewList from '../ReviewList/ReviewList';

const MovieReviews = () => {
  const movie = useContext(MovieContext);
  const [review, setReview] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!movie?.id) return;

    const getCast = async () => {
      try {
        setIsLoad(true);
        const data = await fetchGetReview(movie.id);
        setReview(data.results);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };

    getCast();
  }, [movie]);

  if (!movie) {
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
