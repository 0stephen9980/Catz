import Community from "./components/Community";
import Hero from "./components/Hero";
import Match from "./components/Match";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Track from "./components/Track";
import Rootlayout from "./layout/Rootlayout";

function App() {
  return (
    <Rootlayout>
      <Hero />
      <Services />
      <Track />
      <Match />
      <Community />
      <NewsLetter />
    </Rootlayout>
  );
}

export default App;
