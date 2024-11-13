import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FaEyeSlash />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

MovieControls.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  type: PropTypes.oneOf(['watchlist', 'watched']).isRequired
};

export default MovieControls;
