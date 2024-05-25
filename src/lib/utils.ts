import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MenuItems: string[] = [
  "Home",
  "Services",
  "Work",
  "About",
  "Contact",
];

export const Texts: any = {
  Home: {
    title: "Home",
    description: "Purfectly Connect with Fellow Cat Lovers",
  },
  Services: {
    title: "Services",
    description:
      "Meow there, fellow cat parents! At Catz, we totally get that keeping your furball happy and healthy is your top purr-iority. That’s why we offer a bunch of pawsome services that cater to your kitty's unique needs, including behavior consultations and nutritional guidance.",
  },
  Work: {
    title: "Work",
    description:
      "Bringing Pawsitive Vibes and Endless Cuddles to Cats and Their Hoomans!",
  },
  Numbers: {
    title: "Numbers",
    description:
      "Explore the Pawsome Statistics of Our Feline-loving Family and Unleash the Power of Connection, Inspiration, and Laughter with Cat Lovers Worldwideenance and playtime, we offer personalized care plans tailored to your cat's specific needs.",
  },
  Match: {
    title: "Meow Match: Find Your Feline Soulmate",
    description:
      "Our exclusive Meow Match feature utilizes advanced algorithma to match you with fellow cat lovers who share your interests, values, and perphaps even your  cat's favorite toys. Connect with like-minded individuals and build meaningful relationship in the catz community.",
  },
  Community: {
    title: "Community",
    description:
      "Join the purr-fect online gathering of cat lovers in the Catz community! Share your #Community adventures, swap cat care tips, and connect with fellow feline enthusiasts. Meow, it's where the magic happens! #CatzCommunity #CatLoversUnite",
  },
  NewsLetter: {
    title: "Newsletter",
    description:
      "Stay in the loop with heartwarming tales of feline companionship, stay informed about the latest advancements in cat care, and discover exciting new products and services that will enhance the lives of you and your whiskered friend.",
  },
};

export const CatzWebTrack: any = [
  {
    title: "Catz Members and Growing",
    number: 400,
  },
  {
    title: "Heartwarming Cat Stories Shared",
    number: 800,
  },
  {
    title: "Whisker-tickling Photos Shared",
    number: 1600,
  },
  {
    title: "Engaging Meowtastic Discussions",
    number: 2100,
  },
];
