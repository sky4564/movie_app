import ShowCase from "../components/ShowCase";

function Home() {
  return (
    <>
      <ShowCase></ShowCase>
    </>
  );
}

export default Home;



// import { useEffect, useState } from 'react'
// import Movie from '../components/Movie';

// function Home() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     console.log(json.data)
//     setLoading(false)
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading . . .</h1>
//       ) : (
//         <div>
//           {
//             movies.map((movie) => (
//               <Movie key={movie.id}
//                 id={movie.id}
//                 coverImg={movie.medium_cover_image}
//                 title={movie.title}
//                 summary={movie.summary}
//                 genres={movie.genres}></Movie>
//             ))
//           }
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
