import { Wrapper, Content } from "./HeaderSecondary.style";
import { Link } from "react-router-dom";

const HeaderSecondary = ({ movieTitle }) => {
   return (
      <Wrapper>
         <Content>
            <Link to="/">
               <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
         </Content>
      </Wrapper>
   );
};

export default HeaderSecondary;
