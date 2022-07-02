import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://movieticketbook-json-server.herokuapp.com/movies")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(true);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <div>
      {loading ? (
        <h1>loading......</h1>
      ) : error ? (
        <h1>Something Wrong Happend.....</h1>
      ) : (
        data.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      )}
    </div>
  );
};

export default MovieDetails;
