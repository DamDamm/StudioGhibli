import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import './style.css';

import Header from '../Header/Header';
import Home from '../Home/home';
import Movies from '../Movies/movies';
import Movie from '../Movie/movie';
import Footer from '../Footer/footer';

function App() {

const ApiURL = 'https://ghibliapi.vercel.app/films'; //URL de l'API

const [films, setFilms] = useState([]);

useEffect(() => {
    axios.get(ApiURL)
    .then(res => {
        const movies = res.data;
        console.log(movies);
        setFilms(movies);
    })
}, []);

  return  <>
  <Header/>
    <Routes>
      <Route exact path="/" element={[<Home/>]} />
      <Route path="/films" element={[<Movies films={films}/>]} />
      <Route path="/films/:id" element={[<Movie films={films}/>]} />
    </Routes>
  <Footer />
  </>
}
export default App;