import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export function AddMovie({ movieList, setMovieList }) {

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      "name": name,
      "poster": poster,
      "rating": rating,
      "summary": summary,
      "trailer": trailer,
    };
    // copy of the movie list and add the new movie to it.
    // setMovieList([...movieList, newMovie]);
  
 

  fetch('https://632161f482f8687273b0b104.mockapi.io/movies',{
      method :"POST",
      body: JSON.stringify(newMovie),
      headers: {  "Content-Type": "application/json" },

    }) 
    // .then((data )=> data.json())
    .then(()=> navigate("/movies"))
    .catch((err)=> console.log("error occurs",err));
    
    };

  return (
    <div className='add-movie-form'>
      {/* <input
               type="text"
               placeholder='Name'
               onChange={(event)=> setName(event.target.value)}/> */}

      <TextField
        label="Name"
        onChange={(event) => setName(event.target.value)}
        variant="outlined" />

      {/* <input
               type="text"
               placeholder='Rating'
               onChange={(event)=> setRating(event.target.value)}/> */}

      <TextField
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />

      {/* <input
               type="text"
               placeholder='Poster'
               onChange={(event)=> setPoster(event.target.value)}/> */}

      <TextField
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />

      {/* <input
               type="text"
               placeholder='Summary'
               onChange={(event)=> setSummary(event.target.value)}/> */}

      <TextField
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        variant="outlined" />

      <TextField
        label="trailer"
        onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" />

      <Button onClick={addMovie} variant="contained"> Add Movie</Button>
      
      {/* <p>{name} - {rating} - {poster} -{summary} </p> */}

    </div>

  );
}  
