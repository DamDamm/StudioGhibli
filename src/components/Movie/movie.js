import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './style.css';

function Movie({ films }) {

  const { id } = useParams();

  // Recherchez le film avec l'ID correspondant dans le tableau de films
  // Movieitem  est le tableau de film
  // Movie est juste un seul film dans ce tableau
  const movie = films.find((movieItem) => movieItem.id === id);

  if (!movie) {
      return <p>Film non trouvé.</p>;
  }

    return (
        <>
            <Card className="movieCard">
              <Card.Body className='movie'>
                <Card.Img className="movieImg" variant="top" src={movie.image} />
                <Card.Title className="movieTitle">{movie.title}</Card.Title>
                <Card.Subtitle className="movieDate">{movie.release_date}</Card.Subtitle>
            <div className='movieGroup'>
                <Card.Text className='movieDescription'>{movie.description}</Card.Text>

                <Card.Text className="movieDirector"><span className='directorTitle'>Directeur:</span> {movie.director}</Card.Text>

                <Card.Text className="movieTime"><span className='timeTitle'>Durée:</span> {movie.running_time}</Card.Text>

                <Card.Text className="movieScore"><span className='scoreTitle'>Score:</span> {movie.rt_score}</Card.Text>
            </div>
              </Card.Body>
            </Card>
        </>
    );
}

export default Movie;