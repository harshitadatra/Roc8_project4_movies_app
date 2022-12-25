import React, { useEffect } from "react";
// import Image from "../banner.jpg";
import axios from "axios";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Pagination } from "./Pagination";
export const Movies = () => {


  const [page,setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hover,setHover] = useState('');
  const [favourites,setFavourites] = useState([])
  

  function goAhead() 
  {
    setPage(page+1);
  }
  function goBehind()
  { 
    if(page > 1)
    {
    setPage(page-1)
    }
  }

  let add = (movie) => 
  {
    let newArray = [...favourites,movie]
    setFavourites([...newArray])
    localStorage.setItem("imdb",JSON.stringify(newArray))
  }
  let del = (movie) => 
  {
    let newArray = favourites.filter((m) =>  m.id !== movie.id)
    setFavourites([...newArray])
    localStorage.setItem("imdb",JSON.stringify(newArray))
  }
  useEffect( function () {
    let oldFav = localStorage.getItem("imdb");
    oldFav = JSON.parse(oldFav) || [];
    console.log(oldFav);

    //get data
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${page}`
    )
    .then((res) => {
      console.table(res.data.results);
      setMovies(res.data.results);
    }
    )
  },[page])

  return (
    <>
      <div className="mb-8 text-center">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending movies
        </div>
        {movies.length === 0 ? (
          <div className="flex justify-center">
            <Oval
              heigth="100"
              width="100"
              color="grey"
              secondaryColor="grey"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <>
                <div
                  className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[150px] md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 relative hover:scale-110 ease-out duration-300`}
                  onMouseEnter={() => {
                    setHover(movie.id);
                  }}
                  onMouseLeave={() => setHover("")}
                >
                  { 
                     hover === movie.id && 
                    <>
                      {
                      !favourites.find((m) => m.id === movie.id) ?
                      <div
                      onClick={ () => add(movie)}
                        className="absolute top-2 right-2
                                    p-1
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer"
                      >
                        😍
                      </div>
                      :
                      <div
                      onClick={() => del(movie)}
                        className="absolute top-2 right-2
                                    p-1
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer"
                      >
                        ❌
                        
                      </div>
                    }
                    </>
                  }

                  <div className="w-full font-bold text-white py-2 text-center rounded-b-xl bg-gray-900">
                    {movie.title}
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <Pagination pageProp={page} goAhead={goAhead} goBehind={goBehind} />
    </>
  );
};
