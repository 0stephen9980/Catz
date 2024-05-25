import CatMatch from "../assets/Cat3.png";
import Container from "../layout/Container";
import { Texts } from "../lib/utils";

const Match = () => {
  return (
    <Container id="match">
      <img className="scale-x-[-1]" src={CatMatch} alt="Match" />
      <div className="flex-1">
        <div className="flex flex-col">
          <span className="text-6xl font-extrabold bg-gradient-to-r from-purple-400  via-orange-400 to-purple-400 inline-block text-transparent bg-clip-text">
            {Texts.Match.title}
          </span>
          <span className="text-2xl mt-6">{Texts.Match.description}</span>
        </div>
        <button className="bg-red-100 p-2 px-5 rounded-full hover:ring-2 hover:ring-red-200 mt-8">
          💌 Contact Now
        </button>
      </div>
    </Container>
  );
};
export default Match;
