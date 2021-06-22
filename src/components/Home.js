//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//image
import NoImage from "../images/no_image.jpg";

//components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./Searchbar/SearchBar";

const Home = (props) => {
   const { state, loading, error } = useHomeFetch();
   const { page, results, total_pages, total_results } = state;

   console.log(state);
   const heroMovie = results[0];
   return (
      <>
         {heroMovie && (
            <HeroImage
               title={heroMovie.original_title}
               text={heroMovie.overview}
               image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroMovie.backdrop_path}`}
            />
         )}

         <SearchBar />

         <Grid header="Popular This Week">
            {results.map((movie) => (
               <Thumb
                  id={movie.id}
                  poster={
                     movie.poster_path
                        ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                        : NoImage
                  }
                  clickable
                  movieId={movie.id}
               />
            ))}
         </Grid>

         <Spinner />
      </>
   );
};

export default Home;
