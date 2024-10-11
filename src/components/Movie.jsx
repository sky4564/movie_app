import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movie.css"

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <div className="img-container">
        <img src={coverImg} alt={title} />
      </div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;