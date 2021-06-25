import { useState, useEffect } from "react";

// api
import API from "../API";

export const useMovieFetch = (movieId) => {
   const [state, setState] = useState({});
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchMovie = async (movieId) => {
         try {
            setLoading(true);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            // get director
            const directors = credits.crew.filter(
               (crew) => crew.job === "Director"
            );

            console.log(movie);

            setState({
               ...movie,
               cast: credits.cast,
               directors,
            });

            setLoading(false);
            setError(false);
         } catch (err) {
            setError("Someting Went wrong fetching the movie details!");
         }
      };

      fetchMovie(movieId);
   }, [movieId]);

   return {
      state,
      error,
      loading,
   };
};
