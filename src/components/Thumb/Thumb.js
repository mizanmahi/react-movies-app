import { Image } from "./Thumb.style";

const Thumb = ({ poster, clickable, movieId }) => {
   return (
      <div>
         <Image src={poster} alt="Movie_Thumbnail" />
      </div>
   );
};

export default Thumb;
