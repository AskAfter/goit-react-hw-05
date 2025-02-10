import s from './MovieCard.module.css';

const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

const MovieCard = ({ releaseDate, poster, rate, title }) => {
  const imageUrl = poster
    ? `https://image.tmdb.org/t/p/w200${poster}`
    : defaultImg;

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
