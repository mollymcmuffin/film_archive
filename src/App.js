import './App.css';
import Movie from './components/Movie';
import SearchIcon from './search.svg';

import {useEffect, useState} from 'react';

 //api key OMDB: 5b29ce76

 const API_URL = 'http://www.omdbapi.com?apikey=5b29ce76';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    
  }

  useEffect(()=>{
    searchMovies('batman')
  },[]);
 

  return (
    <div className="app">
      <h1>Film Archive</h1>
      <div className = 'search'>
        <input 
          type = 'search'
          value = {searchTerm}
          onChange = {(e)=>setSearchTerm(e.target.value)}

        />
        <img 
          src = {SearchIcon} 
          alt= 'search'
          onClick={()=> searchMovies(searchTerm)}
        />

      </div>
      <div className = 'container'>
        {movies?.length > 0 
          ? (movies.map((movie)=> <Movie movie = {movie} key={movie.imdbID}/>))
          : ( <div className='empty'>
              <h2>No Movie Found</h2>
             </div>)
        }
        
      </div>
      
      
    </div>
  );
}

export default App;
