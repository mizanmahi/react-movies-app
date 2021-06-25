// components
import Thumb from "../Thumb/Thumb";

// config
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";

//image
import NoImage from "../../images/no_image.jpg";

// styles
import { Wrapper, Content, Text } from "./MovieInfo.style";

const MovieInfo = ({ movie }) => {
   console.log(movie.directors);

   return (
      <Wrapper
         backdrop={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
      >
         <Content>
            <Thumb
               clickable={false}
               poster={
                  movie.poster_path
                     ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                     : NoImage
               }
            />
            <Text>
               <div className="details">
                  <h1>{movie.title}</h1>
                  <h3>PLOT</h3>
                  <h3 className="overview">{movie.overview}</h3>
               </div>

               <div className="rating-directors">
                  <div className="rating">
                     <h3>Rating</h3>
                     <div className="score">{movie.vote_average}</div>
                  </div>
                  <div className="director">
                     <h3>
                        Director
                        {movie.directors
                           ? movie.directors.length > 1
                              ? "s"
                              : ""
                           : ""}
                     </h3>
                     {movie.directors &&
                        movie.directors.map((director) => (
                           <p key={director.credit_id}>{director.name}</p>
                        ))}
                  </div>
               </div>
            </Text>
         </Content>
      </Wrapper>
   );
};

export default MovieInfo;
