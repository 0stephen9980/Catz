import { useState } from "react";
import { MenuItems } from "../lib/utils";
import contact from "../assets/contact.svg";
import SideBar from "./SideBar";
const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="inline md:hidden">
          <SideBar />
        </div>
        <div className="font-[Caveat] text-4xl">CATZ</div>
      </div>
      <div className="hidden md:inline">
        <div className="bg-pink-200/50 p-3 rounded-full text-sm">
          {MenuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item == "Contact" ? "newsletter" : item.toLowerCase()}`}
              className={`p-2 px-3 ${
                item == active && `bg-black text-white rounded-full`
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div>
        <a
          className="flex flex-row justify-center items-center gap-1 border-[2px] border-black p-2 rounded-full px-5"
          href="#newsletter"
        >
          <img src={contact} alt="contact" className="w-4 h-4" />
          Contact Us
        </a>
      </div>
    </div>
  );
};
export default Header;
