import { createContext, useState } from "react";
import PropType from "prop-types";


export const MovieContext= createContext();

export const MovieData=({children})=>{
    const [chosenMovie, setChosenMovie] = useState(null);
    const [saveResults, setSaveResults] = useState("")
    return(
        <MovieContext.Provider value= {{chosenMovie, setChosenMovie, saveResults, setSaveResults}}>
            {children}
        </MovieContext.Provider>
    );
};
MovieData.propTypes = {
    children: PropType.node,
};

export default MovieData