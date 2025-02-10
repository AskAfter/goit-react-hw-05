import axios from 'axios';

// const API_Key = import.meta.env.VITE_API_KEY;
const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const API_Read_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODRkZmRiZTEwMGFiY2JjYTA1OGQ0NjczMWIxMDM1NSIsIm5iZiI6MTczOTA3OTg1NS41NCwic3ViIjoiNjdhODQwYWZiOTM2MGMzZTMzZTA4MzNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.y-ACAq-pB1xEfGZwfhuDuURaVOkHNbwHnyTS1TbEQZg';

export const fetchMovies = async page => {
  const response = await axios.get(BASE_URL, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
    },
    params: {
      page,
    },
  });
  return response.data;
};

export const fetchMovieByID = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const fetchGetCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const fetchGetReview = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;
};
