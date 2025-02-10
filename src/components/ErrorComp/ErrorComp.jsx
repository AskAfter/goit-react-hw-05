import s from './ErrorComp.module.css';

const ErrorComp = () => {
  return (
    <div className={s.container}>
      <p className={s.error}>Oops... something went wrong...</p>
    </div>
  );
};
export default ErrorComp;
