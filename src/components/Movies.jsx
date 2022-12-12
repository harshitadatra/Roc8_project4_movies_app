import React from 'react';
import Image from "../banner.jpg";

export const Movies = () => {
  return (
    <>
      <div className="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending movies
        </div>
        <div className="flex flex-wrap justify-center">
          <div
            className={`bg-[url(${Image})] h-[25vh] w-[150px] md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration 300`}
          >
            <div className="w-full font-bold text-white py-2 text-center rounded-b-xl bg-gray-900">
              Title
            </div>
          </div>
          <div
            className={`bg-[url(${Image})] h-[30vh] w-[250px] bg-center bg-cover rounded-xl flex items-end m-4`}
          >
            <div className="w-full text-white py-2 text-center rounded-b-xl bg-gray-900">
              Title
            </div>
          </div>
          <div
            className={`bg-[url(${Image})] h-[30vh] w-[250px] bg-center bg-cover rounded-xl flex items-end m-4`}
          >
            <div className="w-full text-white py-2 text-center rounded-b-xl bg-gray-900">
              Title
            </div>
          </div>
          <div
            className={`bg-[url(${Image})] h-[30vh] w-[250px] bg-center bg-cover rounded-xl flex items-end m-4`}
          >
            <div className="w-full text-white py-2 text-center rounded-b-xl bg-gray-900">
              Title
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


