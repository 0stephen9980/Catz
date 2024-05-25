import CatLetter from "../assets/Cat4.png";
import Container from "../layout/Container";
import { Texts } from "../lib/utils";
const NewsLetter = () => {
  return (
    <Container id="newsletter">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-end relative h-[500px] lg:h-[200px]">
          <img
            className="absolute bottom-32 md:bottom-4 object-contain"
            src={CatLetter}
            alt="newsletter"
          />
          <div className="absolute top-[13rem] md:top-[19rem] lg:top-0 w-[400px] h-[100px] bg-gradient-to-b from-purple-300/10 via-purple-300/60 to-purple-300 blur-sm"></div>
          <div className="z-[1] flex flex-col justify-center items-center text-2xl text-center px-4 md:px-28">
            <h1 className="text-7xl font-bold w-full">
              {Texts.NewsLetter.title}
            </h1>
            <span>{Texts.NewsLetter.description}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center bg-gray-400/20 p-2 rounded-full mt-20 border border-gray-500">
            <input
              className="w-96 h-10 p-2 rounded-l-md bg-transparent placeholder:text-black outline-none"
              type="text"
              placeholder="Enter your email address here..."
            />
            <button className="bg-gray-100/50 h-10 w-28 text-black rounded-full cursor-pointer border border-gray-500">
              👻 Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default NewsLetter;
