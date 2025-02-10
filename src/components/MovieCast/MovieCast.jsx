import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { fetchGetCast } from '../../services/api';
import Loader from '../Loader/Loader';
import ErrorComp from '../ErrorComp/ErrorComp';
import CastList from '../CastList/CastList';

const MovieCast = () => {
  const movie = useContext(MovieContext);
  const [cast, setCast] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!movie?.id) return;

    const getCast = async () => {
      try {
        setIsLoad(true);
        const data = await fetchGetCast(movie.id);
        setCast(data.cast);
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
      {/* <h2>Cast for {movie.title}</h2> */}
      {isLoad && <Loader />}
      {isError && <ErrorComp />}
      {cast && <CastList castList={cast} />}
    </div>
  );
};

export default MovieCast;
