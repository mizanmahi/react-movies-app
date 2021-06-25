// styles
import { Wrapper } from "./Actor.style";
import { Content } from "../Grid/Grid.style";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

// componetns
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";

// iamge
import NoImage from "../../images/no_image.jpg";

const Actor = ({ title, actors }) => {
   console.log(actors);
   return (
      <Wrapper>
         <Content>
            <Grid header={title} isActor={true}>
               {actors &&
                  actors.map((actor) => (
                     <Thumb
                        key={actor.id}
                        poster={
                           actor.profile_path
                              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${actor.profile_path}`
                              : NoImage
                        }
                        clickable={false}
                        name={actor.name}
                        character={actor.character}
                     />
                  ))}
            </Grid>
         </Content>
      </Wrapper>
   );
};

export default Actor;
