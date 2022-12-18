import React from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';

export const Banner = () => {

  
    const [movie, setMovie] = useState({});
    useEffect(function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1"
        )
        .then((res) => {
          console.table(res.data.results);
          setMovie(res.data.results[0]);
        });
    }, []);
  return (
    <>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}
      >
        <div className="text:xl md:text-3xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center">
          {movie.title}
        </div>
      </div>
    </>
  );
}


