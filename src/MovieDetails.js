import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails() {
  const { movieid } = useParams();

  // const movie = movieList[movieid];
  // console.log(movieList,movie);
  //movie needed to be loaded from API server
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://632161f482f8687273b0b104.mockapi.io/movies/${movieid}`)
      .then(data => data.json())
      .then((mvs) => setMovie(mvs));
  }, [movieid]);

  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div className='trailer-container'>
      <iframe width="90%" height="700"
        src={movie.trailer}
        title="Ponniyin Selvan Teaser | #PS1 Tamil | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
      
      <div className="movie-detailes-container">
        <div className="movie-specs">
          <h2 className='movie-name'>{movie.name}</h2>
         
          <p style={styles} className='movie-rating'>⭐{movie.rating}
          </p>
        </div>
        <p className='movie-summary'> {movie.summary} </p>

        <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}> Back </Button>

      </div>

    </div>
  );
}
