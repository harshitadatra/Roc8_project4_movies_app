import React from 'react'
import { Banner } from './components/Banner'
import { Movies } from './components/Movies'
import { Navbar } from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Favourites } from './components/Favourites'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
             
            </>
          }
        />
        <Route path="/favourite" element={<Favourites/>}/>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App
