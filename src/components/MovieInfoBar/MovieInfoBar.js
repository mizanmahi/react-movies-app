// styles
import { Wrapper, Content } from "../MovieInfoBar/MovieInfoBar.style";

// helper functions
import { calcTime, convertMoney } from "../../helpers";

const MovieInfoBar = ({ movie }) => {

    const runTime = calcTime(movie.runtime);
    const budget = convertMoney(movie.budget);
    const revenue = convertMoney(movie.revenue);

   return (
      <Wrapper>
         <Content>
            <div className="runtime">
               <span>Running Time: {runTime}</span>
            </div>
            <div className="budget">
               <span>Budget: {budget}</span>
            </div>
            <div className="revenue">
               <span>Revenue: {revenue}</span>
            </div>
         </Content>
      </Wrapper>
   );
};

export default MovieInfoBar;
