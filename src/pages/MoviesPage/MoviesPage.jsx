import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect, useRef, useState } from 'react';
import { fetchSearchMovies } from '../../services/api';
import ErrorComp from '../../components/ErrorComp/ErrorComp';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import s from './MoviesPage.module.css';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const productName = query.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchMovies = async () => {
      if (!productName) return;
      try {
        setIsLoading(true);
        const data = await fetchSearchMovies(productName, page);
        if (!data || !data.results || data.results.length === 0) {
          setTotalPages(page);
          return;
        }
        setMovies(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [productName, page]);

  const handleSubmit = value => {
    setQuery({ query: value });
    setPage(1);
    setMovies([]);
  };
  const handleClick = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className={s.container}>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorComp />}
      <div className={s.thumb}>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
      {page < totalPages && <LoadMoreBtn handleClick={handleClick} />}
    </div>
  );
};
export default MoviesPage;
