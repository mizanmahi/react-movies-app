import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./HeaderSecondary.style";

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

HeaderSecondary.propTypes = {
   movieTitle: PropTypes.string,
};

export default HeaderSecondary;
