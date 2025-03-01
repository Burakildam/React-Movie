import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import PropTypes from 'prop-types';

const ResultCard = ({ movie }) => {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : !!storedMovieWatched;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={storedMovie}
            onClick={() => addMovieToWatchlist(movie)}
          >
            İzleneceklere Ekle
          </button>
          <button
            className="btn"
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            İzlenenlere Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number
  }).isRequired
};

export default ResultCard;
