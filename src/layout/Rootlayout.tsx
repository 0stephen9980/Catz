import Footer from "../components/Footer";
import Header from "../components/Header";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="flex flex-col font-[Caveat] h-full px-6  max-w-7xl mx-auto">
        <nav className="text-center p-4 max-h-28 sticky top-0 backdrop-blur-md z-10">
          <Header />
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="text-center p-4">
          <Footer />
        </footer>
      </section>
      <hr className="absolute w-full border-t-purple-500 border-t-[2.4px] bottom-[430px] sm:bottom-[370px]" />
      <hr className="absolute w-full border-t-purple-400/80 border-t-[2px] bottom-[50px]" />
    </>
  );
};
export default Rootlayout;
