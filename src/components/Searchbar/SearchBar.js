import { useEffect, useRef, useState } from "react";

// styles
import { Wrapper, Content } from "./SearchBar.style";

// searchIcon image
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
   const [state, setState] = useState("");
   const initial = useRef(true); // mutable value, it does not cause a rerender

   const changeHandler = (e) => {
      const { value } = e.target;
      setState(value);
   };

   useEffect(() => {
       // preventing useEffect to run when the component load for the first time
      if (initial.current) {
         initial.current = false;
         return;
      }

      const timer = setTimeout(() => {
         setSearchTerm(state);
      }, 1000);

      return () => clearTimeout(timer);
   }, [state, setSearchTerm]);

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
