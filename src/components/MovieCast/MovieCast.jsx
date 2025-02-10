import { useEffect, useState } from 'react';
import { fetchGetCast } from '../../services/api';
import Loader from '../Loader/Loader';
import ErrorComp from '../ErrorComp/ErrorComp';
import CastList from '../CastList/CastList';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      try {
        setIsLoad(true);
        const data = await fetchGetCast(movieId);
        setCast(data.cast);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };

    getCast();
  }, [movieId]);

  if (!cast) {
    return <Loader />;
  }

  return (
    <div>
      {/* <h2>Cast for {movie.title}</h2> */}
      {isLoad && <Loader />}
      {isError && <ErrorComp />}
      {cast && <CastList castList={cast} />}
    </div>
  );
};

export default MovieCast;
