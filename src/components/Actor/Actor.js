import { Wrapper, Image } from "./Actor.style";
import PropTypes from "prop-types";

const Actor = ({ name, character, imageUrl }) => {
   return (
      <Wrapper>
         <Image src={imageUrl} alt="Actor_Thumb" />
         <h3>{name}</h3>
         <p>{character}</p>
      </Wrapper>
   );
};

Actor.propTypes = {
   name: PropTypes.string,
   character: PropTypes.string,
   imageUrl: PropTypes.string,
};

export default Actor;
