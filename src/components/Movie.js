// routing
import { useParams } from "react-router";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import Spinner from "./Spinner/Spinner";
import HeaderSecondary from "./HeaderSecondary/HeaderSecondary";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// image
import NoImage from "../images/no_image.jpg";

const Movie = (props) => {
   const { movieId } = useParams();
   const { state: movie, loading, error } = useMovieFetch(movieId);

   if (loading) return <Spinner />;
   return (
      <>
         <HeaderSecondary movieTitle={movie.title} />
         <MovieInfo movie={movie} />
         <MovieInfoBar movie={movie} />
         <Actor title="Casts" actors={movie.cast}/>
      </>
   );
};

export default Movie;
