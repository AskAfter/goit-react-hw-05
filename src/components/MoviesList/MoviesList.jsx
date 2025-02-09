import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import s from './MoviesList.module.css';
const MoviesList = ({ movies }) => {
  const markup = movies.map(
    ({ id, release_date, poster_path, vote_average, title }) => (
      <li className={s.listItem} key={id}>
        <Link to={`/movies/${id.toString()}`} className={s.listItemLink}>
          <MovieCard
            releaseDate={release_date}
            poster={poster_path}
            rate={vote_average}
            title={title}
          />
        </Link>
      </li>
    )
  );
  return <ul className={s.list}>{markup}</ul>;
};
export default MoviesList;
