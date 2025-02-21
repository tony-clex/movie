import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Detail from "./pages/detail";
import Home from "./pages/home";
import { MovieData } from "./context/context.jsx";

function App() {
  return (
    <MovieData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </MovieData>
  );
}

export default App;
