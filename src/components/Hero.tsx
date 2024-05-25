import catHero from "../assets/catHero.png";
import Container from "../layout/Container";
const Hero = () => {
  return (
    <Container id="home">
      <img src={catHero} alt="cat" />
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <div className="text-4xl xl:text-6xl">
          Purfectly Connect with Fellow Cat Lovers
        </div>
        <div className="text-2xl">
          Where Whiskers and Meows Bring Us Together
        </div>
        <button className="bg-red-100 p-1 px-4 rounded-full hover:ring-2 hover:ring-red-200">
          😻 Join our Feline Family Today!
        </button>
      </div>
    </Container>
  );
};
export default Hero;
