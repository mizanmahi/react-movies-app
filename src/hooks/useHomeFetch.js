import { useEffect, useState, useRef } from "react";

//api
import APi from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
   const [state, setState] = useState(initialState);
   const [loading, setloading] = useState(false);
   const [error, setError] = useState(false);

   const fetchMovies = async (page, searchTerm = "") => {
      try {
         setError(false);
         setloading(true);

         const movies = await APi.fetchMovies(searchTerm, page);
         console.log(movies);

         setState((prev) => ({
            ...movies,
            results:
               page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
         }));
      } catch (err) {
         setError(true);
      }

      setloading(false);
   };

   useEffect(() => {
      fetchMovies(1);
   }, []);

   return {
      state,
      loading,
      error,
   };
};
