import MovieControls from "./MovieControls";
import PropTypes from 'prop-types';

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.vote_average && (
        <div className="vote-average">{movie.vote_average}</div>
      )}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls movie={movie} type={type} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  type: PropTypes.oneOf(['watchlist', 'watched']).isRequired
};

export default MovieCard;
