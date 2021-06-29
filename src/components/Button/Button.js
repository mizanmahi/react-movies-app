import PropTypes from "prop-types";

import { Wrapper } from "./Button.style";

const Button = ({ text, clickHandler }) => {
   return (
      <Wrapper type="button" onClick={clickHandler}>
         {text}
      </Wrapper>
   );
};

Button.prototypes = {
   text: PropTypes.string,
   clickHandler: PropTypes.func,
};

export default Button;
