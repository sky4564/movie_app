import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../css/showCase.css"

export default function ShowCase() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies.slice(0, 5));
    setLoading(false)
    console.log(json.data.movies)
    console.log(json.data.movies)
  };

  useEffect(() => {
    getMovies();
  }, []);

  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };


  return (
    <>
      {loading ?
        (<div>isloading</div>)
        :
        (
          <div className="container">
            {movies.map((movie) => (
              // <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="card"
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img src={movie.medium_cover_image} />
              </div>
              // </Link>
            ))}
          </div>
        )
      }
    </>
  )
}