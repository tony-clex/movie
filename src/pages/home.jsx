import Hero from "../components/herosection/hero";
import Nav from "../components/nav";
import Latestandtrending from "../components/LatestTrending";
import Topsearches from "../components/topsearches";
import Action from "../components/action"
import Romance from "../components/romance";
import Comedy from "../components/comedy";
import Footer from "../components/footer";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MovieContext } from "../context/context";

export default function Home() {
  
  const navigate = useNavigate()
  const {setChosenMovie} = useContext(MovieContext)

  const handleNavigate = (movie) => {
    navigate(`/detail/${movie.id}`)
    setChosenMovie(movie)
   }

  return (
    <>
      <Nav />
      <Hero />
      <Comedy redirect={handleNavigate}/>
      <Topsearches redirect={handleNavigate} />
      <Action redirect={handleNavigate} />
      <Romance redirect={handleNavigate} />
     <Latestandtrending redirect={handleNavigate} />
      <Footer />
    </>
  );
}
