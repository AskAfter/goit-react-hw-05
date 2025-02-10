import s from './CastCard.module.css';
const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';
const CastCard = ({ name, photo }) => {
  const imageUrl = photo
    ? `https://image.tmdb.org/t/p/w200${photo}`
    : defaultImg;

  return (
    <div className={s.container}>
      <h4 className={s.name}>{name}</h4>
      <img className={s.photo} src={imageUrl || defaultImg} alt="Actor photo" />
    </div>
  );
};
export default CastCard;
