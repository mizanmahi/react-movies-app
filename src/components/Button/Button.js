import { Wrapper } from "./Button.style";

const Button = ({ text, clickHandler }) => {
   return (
      <Wrapper type="button" onClick={clickHandler}>
         {text}
      </Wrapper>
   );
};

export default Button;
