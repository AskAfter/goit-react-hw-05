import { useEffect, useRef, useState } from 'react';
import { fetchMovies } from '../../services/api';
import s from './HomePage.module.css';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import ErrorComp from '../../components/ErrorComp/ErrorComp';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isFirstRender = useRef(true);
  const handleClick = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(page);
        setTotalPages(data.total_pages);
        setMovies(prev => [...prev, ...data.results]);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [page]);

  return (
    <div className={s.homeSection}>
      <MoviesList movies={movies} />
      {page < totalPages && <LoadMoreBtn handleClick={handleClick} />}
      {isError && <ErrorComp />}
      {isLoading && !isError && <Loader />}
    </div>
  );
};
export default HomePage;
