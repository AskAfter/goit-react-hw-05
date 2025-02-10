import s from './CastCard.module.css';

const CastCard = ({ name, photo }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${photo}`;
  return (
    <div className={s.container}>
      <h4 className={s.name}>{name}</h4>
      <img className={s.photo} src={imageUrl} alt="Actor photo" />
    </div>
  );
};
export default CastCard;
