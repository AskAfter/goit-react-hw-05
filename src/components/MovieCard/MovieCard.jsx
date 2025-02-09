import s from './MovieCard.module.css';
const MovieCard = ({ releaseDate, poster, rate, title }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${poster}`;
  return (
    <div className={s.container}>
      <img className={s.poster} src={imageUrl} alt="Poster picture" />
      <h4 className={s.title}>{title}</h4>
      <p>Release {releaseDate}</p>
      <p>Rate: {rate.toFixed(1)}</p>
    </div>
  );
};
export default MovieCard;
