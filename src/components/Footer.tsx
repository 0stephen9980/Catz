const Row1: object = [
  {
    title: "Quick links",
    links: ["Home", "About", "Services", "Contact"],
  },
];

const Footer = () => {
  return (
    <div className="relative mt-10" id="contact">
      <div className="flex flex-col">
        <div className="flex justify-evenly items-center flex-col md:flex-row gap-8 md:gap-0 mb-4">
          <div className="w-full md:w-[400px]">
            {Object.entries(Row1).map(([key, value]) => {
              return (
                <div key={key}>
                  <h3 className="text-2xl font-bold mb-1">{value.title}</h3>
                  <div className="flex md:flex-col justify-evenly items-center">
                    {value.links.map((link: string, index: number) => (
                      <span
                        key={index}
                        className="text-lg leading-loose hover:underline"
                      >
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:w-[400px] text-2xl md:text-left">
            <span className="text-3xl font-bolder mb-2">CATZ</span>
            <p className="text-left mt-4">
              Catz - Where Cat Lovers Unite ! Join our vibrant community of
              passionate cat enthusiasts, connect with fellow feline lovers and
              explore a worls of hearwarming stories valuable resources and
              adorable cat photos.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 font-bold">
          <a className="hover:underline" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#rights">
            All rights reserved
          </a>
          <a className="hover:underline" href="#terms">
            Tearms & conditions
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
