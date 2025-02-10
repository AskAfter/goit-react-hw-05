import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieByID } from '../../services/api';
import { MovieContext } from '../../context/MovieContext';
import Movie from '../../components/Movie/Movie';
import Loader from '../../components/Loader/Loader';
import ErrorComp from '../../components/ErrorComp/ErrorComp';
import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const MovieDetailsPage = () => {
  const location = useLocation();
  const baseUrl = useRef(location.state ?? '/movies');
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoad(true);
        const data = await fetchMovieByID(movieId);
        setMovie(prev => ({ ...prev, ...data }));
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <MovieContext.Provider value={movie}>
      <div>
        <Link className={s.link} to={baseUrl.current}>
          ---Go back---
        </Link>
        {movie && <Movie movie={movie} />}
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={buildLinkClass} to="cast">
              Cast
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={buildLinkClass} to="reviews">
              Review
            </NavLink>
          </li>
        </ul>
        {isError && <ErrorComp />}
        {isLoad && <Loader />}
        <Outlet />
      </div>
    </MovieContext.Provider>
  );
};
export default MovieDetailsPage;
