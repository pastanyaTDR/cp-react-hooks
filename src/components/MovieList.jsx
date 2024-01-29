import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filted, setFiltred] = useState([]);
  console.log(filted);

  useEffect(() => {
    fetch("http://localhost:3000/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const data = await res.json();
      setMovies(data);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "60px",
      }}
    >
      <Filter setFiltred={setFiltred} movies={movies} />

      {filted.length > 0
        ? filted.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })
        : movies.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
    </div>
  );
}

export default MovieList;
