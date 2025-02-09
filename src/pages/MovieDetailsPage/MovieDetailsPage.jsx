import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByID } from '../../services/api';
import Movie from '../../components/Movie/Movie';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieByID(movieId);
        setMovie(prev => ({ ...prev, ...data }));
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);
  return <div>{movie ? <Movie movie={movie} /> : <p>Loading...</p>}</div>;
};
export default MovieDetailsPage;
