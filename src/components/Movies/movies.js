import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {useState} from 'react';

import './style.css';

function Movies({ films }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(films);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredMovies = films.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFilms(filteredMovies);
  };

  return (
    <>
    <div className='search'>
      <input type='text' placeholder='Rechercher un film' className='searchText' value={searchTerm} onChange={handleSearchChange} />
      <Button variant='primary' className='submit'>Valider</Button>
    </div>

      <ul className="moviesList">
        {filteredFilms.map((movieItem) => (
          <li key={movieItem.id}>
            <Card className="movies">
              <Card.Body>
                <Card.Img className="moviesImg" variant="top" src={movieItem.image} />
                <Card.Title className="moviesTitle">{movieItem.title}</Card.Title>
                <Card.Text className="moviesDate">{movieItem.release_date}</Card.Text>
                <Link to={`/films/${movieItem.id}`}>
                  <Button variant="primary" className="more">
                    Lire plus
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
