import { useState } from "react";

import "./assets/style.css";
import movies from "./assets/movies";

import Header from "./comps/Header";
import Catalog from "./comps/Catalog";
import MainContent from "./comps/MainContent";

const Exe2 = () => {
  const [movieCurrent, setMovieCurrent] = useState({
    title: movies[0].title,
    imdb: movies[0].imdb,
    img: movies[0].img,
    director: movies[0].director,
    comment: movies[0].comment,
  });

  return (
    <div className="bodyExe2">
      <h2>This is the second exercise</h2>
      <div className="App">
        <Header />
        <MainContent
          img={movieCurrent.img}
          title={movieCurrent.title}
          imdb={movieCurrent.imdb}
          director={movieCurrent.director}
          comment={movieCurrent.comment}
        />
        <Catalog movies={movies} handleSetState={setMovieCurrent} />
      </div>
    </div>
  );
};

export default Exe2;
