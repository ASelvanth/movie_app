
import './App.css';

import {useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
// import MailIcon from '@mui/icons-material/Mail';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from './Home';
import { NotFound } from './NotFound';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { INITIAL_MOVIES_LIST } from './INITIAL_MOVIES_LIST';
import { type } from '@testing-library/user-event/dist/type';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
// import { Brightness1 } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';

function App() {

  // const [movies,setMovies] = useState([]);
  const [ movieList, setMovieList ] = useState ([]);
  const navigate = useNavigate ();
  const [mode,setMode] = useState ("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      //mode: 'light', it will change the color of the background_color when the background_color is changed
    },
  });

  useEffect(()=>{
    fetch('https://632161f482f8687273b0b104.mockapi.io/movies')  
    .then(data => data.json())
    .then((mvs)=> setMovieList(mvs));
    },[]);

 return (
  
 <ThemeProvider theme={darkTheme}>
   <Paper sx={{minHeight : "100vh", borderRadius : "0px"}} elevation={4}> 
    <div className="App">     
      <AppBar position="static">
      <Toolbar>         
          <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>   
          <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add Movie</Button>
          {/* <Button color="inherit" onClick={()=>navigate('/color-game')}>Color Game</Button> */}
          <Button           
              startIcon = {mode=== "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              sx={{marginLeft:"auto"}}
              color ="inherit" 
              onClick={()=>setMode(mode=== "light" ? "dark" :"light")}>
              { mode === "light" ? "dark" :"light"} 
               mode
            </Button>
        </Toolbar>
        </AppBar>

        {/* routing */}
        <section className="route-container"> 
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/films" 
                element={<Navigate replace to= "/movies" />} />

            <Route path="/home" element={<Home />} />
           
            {/* <Route path="/movies" 
                element={<MovieList movieList = {movieList} />} /> */}

            <Route path="/movies" 
                element={<MovieList />} />
            
            {/* <Route 
                path="/movies/add" 
                element={<AddMovie movieList = {movieList} setMovieList = {setMovieList} />}
              /> */}

            <Route 
                path="/movies/add" 
                element={<AddMovie  />}
              />

            {/* <Route path="/movies/:movieid" element={<MovieDetails movieList = {movieList}/>} /> */}
            
            <Route path="/movies/:movieid" 
              element={<MovieDetails />} />
          
            <Route path="/color-game" element={<AddColor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </section>
        {/* <AddMovie movieList = {movieList} setMovieList = {setMovieList}/> */}
        {/* <MovieList movieList = {movieList} setMovieList = {setMovieList}/> */}
      </div>
   </Paper>
 </ThemeProvider>
  );
}

export default App;
