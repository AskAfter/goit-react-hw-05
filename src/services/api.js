import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const API_Read_ACCESS_TOKEN = import.meta.env.VITE_API_KEY;

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

export const fetchSearchMovies = async (query, page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_Read_ACCESS_TOKEN}`,
      },
      params: {
        page,
      },
    }
  );
  return response.data;
};
