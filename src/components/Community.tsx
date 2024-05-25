import CatCommunity from "../assets/community.png";
import { Texts } from "../lib/utils";
import Posts from "./Posts";
const Community = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10" id="about">
      <div className="flex flex-col justify-center items-center relative h-[400px]">
        <img className="absolute" src={CatCommunity} alt="Community" />
        <div className="absolute top-32 w-[400px] h-[200px] bg-gradient-to-b from-[#E9AFF2]/10 via-[#E9AFF2]/80 to-[#E9AFF2] blur-sm"></div>
        <div className="flex flex-col text-center relative top-24 px-4 md:px-24">
          <span className="text-5xl font-bold">{Texts.Community.title}</span>
          <span className="text-2xl">{Texts.Community.description}</span>
        </div>
      </div>
      <Posts />
    </div>
  );
};
export default Community;
