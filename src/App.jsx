import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await axios.get("https://dummyapi.online/api/movies").then((res) => {
          setMovies(res.data);
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.movie}</h2>
                <p>Rating: {movie.rating}</p>
              </li>
            ))}
          </ul>

          {/* {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.movie}</h2>
              <p>{movie.rating}</p>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default App;
