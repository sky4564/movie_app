import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

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
    console.log(json.data)
    console.log(json.data.movie)
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
        <Movie
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        ></Movie>
        <Movie
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        ></Movie>
      </>
  )
}