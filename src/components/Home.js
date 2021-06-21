//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//image
import NoImage from "../images/no_image.jpg";

//components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";

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
         <Grid header="Popular This Week">
            {results.map(movie => (<div key={movie.id}>
               {movie.title}
            </div>))}
         </Grid>
      </>
   );
};

export default Home;
