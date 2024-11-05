import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import '../css/detail.css'

export default function Detail() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState()
  const { id } = useParams();


  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setMovie(json.data.movie)
    setLoading(false)
  };

  useEffect(() => {
    getMovie()
  }, [id])


  return (
    loading ? <div>is loading . . .</div>
      :
      <>
        <div className="card">
          <div className="card-content">
            <div className="card-front">
              <Movie
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            </div>
            <div className="card-back">
              <h2>{movie.title}</h2>
              <p>Rating: {movie.rating}</p>
              <p>Runtime: {movie.runtime} minutes</p>
              <p>Year: {movie.year}</p>
              <p>Download Count: {movie.download_count}</p>
              <p className="description">{movie.description_full}</p>
            </div>
          </div>
        </div>
      </>
  )
}