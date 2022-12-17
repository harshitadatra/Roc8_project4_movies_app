import React from 'react'


export const Pagination = ({pageProp,goAhead,goBehind}) => {
  
  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <button onClick={goBehind} className="p-2 border-2 border-r-0  rounded-l-xl border-indigo-500 text-indigo-500">
          Previous
        </button>
        <button className="p-2 border-2 bg-g-300 border-indigo-500 text-indigo-500">
          {pageProp}
        </button>
        <button onClick={goAhead} className="p-2 border-2 border-l-0  rounded-r-xl border-indigo-500 text-indigo-500">
          Next
        </button>
      </div>
    </>
  );
}


