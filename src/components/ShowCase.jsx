import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../css/showCase.css"

export default function ShowCase() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const randomPage = Math.floor(Math.random() * 10) + 1;

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&page=${randomPage}&limit=5`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
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
              <div className="card"
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img src={movie.medium_cover_image} />
              </div>
            ))}
          </div>
        )
      }
    </>
  )
}