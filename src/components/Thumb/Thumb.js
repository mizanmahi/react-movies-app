import { Image, ActorDetails } from "./Thumb.style";

// routing
import { Link } from "react-router-dom";

const Thumb = ({ poster, clickable, name, character, movieId }) => {
   return (
      <div>
         {clickable ? (
            <Link to={`/${movieId}`}>
               <Image src={poster} alt="Movie_Thumbnail" />
            </Link>
         ) : (
            <>
               <Image src={poster} alt="Movie_Thumbnail" />
               {name && character && (
                  <ActorDetails>
                     <h3>{name}</h3>
                     <p>{character}</p>
                  </ActorDetails>
               )}
            </>
         )}
      </div>
   );
};

export default Thumb;
