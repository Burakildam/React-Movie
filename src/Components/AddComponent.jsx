import { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  const addStyle = {
    backgroundColor: "#526D82",
    backgroundPosition: "center",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content" style={addStyle}>
          
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              defaultValue="Kolpaçino"
              placeholder="Film, dizi, kişi ara..."
            />
          </div>

          
        </div>
        {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default Add;
