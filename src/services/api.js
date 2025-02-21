import  { useState, useEffect } from 'react';

const apikey= import.meta.env.VITE_BASE_API_KEY;

function Api (){
  const [movies, setMovies] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
       try {
         const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
          const data = await response.json();
          setMovies(data.results);
          console.log(data.results)
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
       };

       fetchMovies();
    }, []);


return ( 
  <>
  <h1 className='hh'>Comedy</h1>
  <ul>
        {movies.map((movie)=>(   
         <li key={movie.id}>{movie.title} </li>
     ))}
     </ul>

  </>

)
}
export default Api







