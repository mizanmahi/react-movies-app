import { useState } from "react";

// styles
import { Wrapper, Content } from "./SearchBar.style";

// searchIcon image
import searchIcon from "../../images/search-icon.svg";

const SearchBar = () => {
   const [state, setState] = useState("");

   const changeHandler = (e) => {
       const { value } = e.target;
       setState(value);
   };

   return (
      <Wrapper>
         <Content>
            <img src={searchIcon} alt="Search Icon" />
            <input
               type="text"
               placeholder="Search Movies"
               onChange={changeHandler}
               value={state}
            />
         </Content>
      </Wrapper>
   );
};

export default SearchBar;
