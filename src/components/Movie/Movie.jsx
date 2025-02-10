import s from './Movie.module.css';

const Movie = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  return (
    <div className={s.container}>
      <img className={s.poster} src={imageUrl} alt="Movie poster" />
      <div className={s.thumb}>
        <h2>{movie.title}</h2>
        <p>Rate:{movie.vote_average}</p>
        <h3>Genres: </h3>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
export default Movie;
