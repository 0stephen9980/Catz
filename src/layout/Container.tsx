const Container = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div
      className="font-[Caveat] py-14 md:py-28 flex flex-col lg:flex-row justify-center items-center gap-4"
      id={id}
    >
      {children}
    </div>
  );
};
export default Container;
