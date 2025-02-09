import s from './Movie.module.css';

const Movie = ({ movie }) => {
  console.log(movie);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  return (
    <div className={s.container}>
      <img src={imageUrl} alt="Movie poster" />
    </div>
  );
};
export default Movie;
