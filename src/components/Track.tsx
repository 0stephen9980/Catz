import Container from "../layout/Container";
import { CatzWebTrack, Texts } from "../lib/utils";
import CatTrack from "../assets/Cat2.png";
import Number from "./Number";

const Track = () => {
  return (
    <Container id="work">
      <div className="flex flex-col justify-center items-center">
        <span className="text-7xl text-center font-bold bg-gradient-to-r from-purple-400  via-orange-400 to-purple-400 inline-block text-transparent bg-clip-text px-4 md:px-20">
          {Texts.Work.description}
        </span>
        <div className="relative min-h-[500px] flex justify-center items-end mb-14">
          <img
            className="absolute bottom-36 md:bottom-14 rotate-6"
            src={CatTrack}
            alt="track"
          />
          <div className="absolute top-32 w-[400px] h-[100px]"></div>
          <div className="text-center backdrop-blur-sm px-4 md:px-20">
            <h1 className="text-6xl">{Texts.Numbers.title}</h1>
            <span className="text-2xl">{Texts.Numbers.description}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 font-bold px-4 md:px-20">
          {CatzWebTrack.map((track: any, index: number) => (
            <Number key={index} title={track.title} number={track.number} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Track;
