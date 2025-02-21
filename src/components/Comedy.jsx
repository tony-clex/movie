import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react';


function Comedy ({redirect}){
  const apikey= import.meta.env.VITE_BASE_API_KEY;
  const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&include_language=en-US&page=2`)
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
  <h1 className='hh'>LATEST & TRENDING</h1>
  <div className='slider'>
  
    {
    movies.map((item,index)=>{
      return (
        <>
         
        <div className="movie" key={index}>
        <p className='numbers'>{index + 1}</p>

        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" className='tony' onClick={()=>redirect(item)}/>
       
        </div>

        </>

      )

    })

  }
  </div>
  </>
 

  )

}
export default Comedy

 Comedy.propTypes = {
   redirect: PropTypes.func
}

  