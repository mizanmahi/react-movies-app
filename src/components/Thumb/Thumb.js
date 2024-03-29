import { Image } from "./Thumb.style";

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
            
               <Image src={poster} alt="Movie_Thumbnail" />
               
         
         )}
      </div>
   );
};

export default Thumb;
