import { Wrapper, Content } from "./Grid.style";

const Grid = ({ header, children, isActor }) => {
   return (
      <Wrapper>
         <h1>{header}</h1>
         <Content isActor={isActor} >{children}</Content>
      </Wrapper>
   );
};

export default Grid;
