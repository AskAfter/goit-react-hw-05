import CastCard from '../CastCard/CastCard';
import s from './CastList.module.css';
const CastList = ({ castList }) => {
  const markup = castList.map(castListActor => {
    return (
      <li className={s.listItem} key={castListActor.id}>
        <CastCard
          character={castListActor.character}
          name={castListActor.name}
          photo={castListActor.profile_path}
        />
      </li>
    );
  });
  return <ul className={s.list}>{markup}</ul>;
};
export default CastList;
