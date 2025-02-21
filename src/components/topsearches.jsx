import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function Topsearches ({redirect}){
  const apikey= import.meta.env.VITE_BASE_API_KEY;
  const [movies, setMovies] = useState([]);
useEffect(() => {
  const fetchMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
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
  <h1 className='hh'>Top searches</h1>
  <div className='ewi'>
  
    {
    movies.map((item,index)=>{
      return (
        <>
         
        <div className="movie" key={index}>

        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" className='clex'  onClick={()=>redirect(item)} />
       
        </div>

        </>

      )

    })

  }
  </div>
  </>
 

  )

}
export default Topsearches

Topsearches.propTypes = {
   redirect: PropTypes.func
}


  