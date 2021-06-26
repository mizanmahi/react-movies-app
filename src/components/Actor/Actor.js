import { Wrapper, Image } from "./Actor.style";

const Actor = ({ name, character, imageUrl }) => {
   return (
      <Wrapper>
         <Image src={imageUrl} alt="Actor_Thumb" />
         <h3>{name}</h3>
         <p>{character}</p>
      </Wrapper>
   );
};

export default Actor;
