import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardActions, CardContent } from '@mui/material';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

//component declaration
export function Movie({ movie, id , deleteButton}) {

  const [show, setShow] = useState(true);

  //to show the movieList rating with different color values
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();


  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
        <div className="movie-specs">
          <h2 className='movie-name'>{movie.name}</h2>
          {/*Toggling*/}
          <IconButton color="primary" onClick={() => setShow(!show)}
           aria-label="Toggle Summary">

            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          <IconButton color="primary" 
           aria-label="Movie-details"
           onClick={()=>navigate(`/movies/${id}`)}>
          <InfoIcon /> 
           
          </IconButton>

          <p style={styles} className='movie-rating'>⭐{movie.rating}
          </p>
        </div>


        {/* Conditional Rendering */}
        {show ? <p className='movie-summary'> {movie.summary} </p> : null}
      </CardContent>
      <CardActions>
        <Counter /> 
        { deleteButton }
      </CardActions>

    </Card>
  );

}
