import ServiceImage from "../assets/catService.png";
import { Texts } from "../lib/utils";
import CatService1 from "../assets/Cat1.png";
import CatService2 from "../assets/Cat4.png";

const Services = () => {
  return (
    <div
      className="font-[Caveat] flex flex-col justify-center items-center gap-4"
      id="services"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <img className="relative top-28" src={ServiceImage} alt="service" />
        <div className="backdrop-blur-sm flex flex-col justify-center items-center px-4 md:px-20">
          <h1 className="text-4xl font-extrabold">Services</h1>
          <span className="text-2xl text-center">
            {Texts.Services.description}
          </span>
        </div>
        <button className="bg-red-100 p-2 px-5 rounded-full hover:ring-2 hover:ring-red-200">
          🧶 Contact Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
        <div className="flex flex-col justify-center items-center bg-red-200/90 border-[2px] rounded-[20px] h-[500px] hover:border-0 hover:ring-[2px] hover:ring-red-300 cursor-pointer">
          <h1 className="text-3xl font-extrabold text-center">
            Behavior <br /> Consulations
          </h1>
          <img className="h-[75%]" src={CatService1} alt="CatService1" />
        </div>
        <div className="flex flex-col justify-center items-center bg-red-200/90 border-[2px] rounded-[20px] h-[500px] hover:border-0 hover:ring-[2px] hover:ring-red-300 cursor-pointer">
          <h1 className="text-3xl font-extrabold text-center">
            Nutritional <br /> Guidance
          </h1>
          <img className="h-[75%]" src={CatService2} alt="CatService2" />
        </div>
      </div>
    </div>
  );
};
export default Services;
