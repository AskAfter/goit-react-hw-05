import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Navigation from '../Navigation/Navigation';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
// import { lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('../../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
// const Navigation = lazy(() => import('../Navigation/Navigation'));

function App() {
  return (
    <div className={s.container}>
      <Navigation />
      {/* <Suspense fallback={<div className={s.loading}>loading...</div>}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
