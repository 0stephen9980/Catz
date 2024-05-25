import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./Sheet";
import menu from "../assets/menu.svg";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <img src={menu} alt="menu" className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-gradient-to-b from-rose-300 to-purple-300 text-foreground"
      >
        <div className="flex flex-col gap-4 p-4 items-start">
          <SheetClose>
            <a href="#home" className="text-lg">
              Home
            </a>
          </SheetClose>
          <SheetClose>
            <a href="#about" className="text-lg">
              About
            </a>
          </SheetClose>
          <SheetClose>
            <a href="#services" className="text-lg">
              Services
            </a>
          </SheetClose>
          <SheetClose>
            <a href="#contact" className="text-lg">
              Contact
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default SideBar;
