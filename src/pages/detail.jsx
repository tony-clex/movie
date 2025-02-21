import Action from "../components/action";
import Romance from "../components/romance";
import Latestandtrending from "../components/LatestTrending";
import Footer from "../components/footer";
import Nav from "../components/Nav"
import Topcasts from "../components/Topcast";
import { useContext } from "react";
import { MovieContext } from "../context/context";

export default function Detail() {
  const { chosenMovie } = useContext(MovieContext);
  console.log(chosenMovie);
  return (
    <>
     <Nav></Nav>
      <div className="details"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${chosenMovie.backdrop_path})`,
          height: "600px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
       
       <p>{chosenMovie.overview}</p>
      </div>
      <Topcasts/>
      <Action />
      <Romance />
      <Latestandtrending />
      <Footer />
    </>
  );
}
