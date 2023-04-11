import { Movie } from './Movie';
import { useState,useEffect } from 'react';
// import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList() {

  const [movies,setMovies] = useState([]);

  const getMovies = ()=>{
    fetch('https://632161f482f8687273b0b104.mockapi.io/movies',{
      method :"GET"
    })
    .then(data => data.json())
    .then((mvs)=> setMovies(mvs));
    };

    useEffect(()=> getMovies(),[]);

    const deleteMovie = (id) =>{
      console.log('deleting.....',id);
    //Delete --> latest data
    fetch(`https://632161f482f8687273b0b104.mockapi.io/movies/${id}`,{
        method:"DELETE"
      }).then(()=>getMovies());  
      };

  return (
    <div className="movie-list-container">
      {movies.map((mv, index) => (
        <Movie 
            key={mv.id} 
            movie={mv} 
            id ={mv.id}
            deleteButton = {
            <IconButton 
            onClick= { () => deleteMovie(mv.id)} 
            aria-label="delete"
            color="error"
            >
            <DeleteIcon />
          </IconButton>
           
            }
        />
      ))}
    </div>
  );
}
