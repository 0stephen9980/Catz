type IProps = {
  title: string;
  number: number;
};

const Number = (props: IProps) => {
  const { title, number } = props;

  return (
    <div className="flex justify-center items-start flex-col">
      <span className="text-2xl font-extrabold">{title}</span>
      <span className="text-5xl">{number}+</span>
    </div>
  );
};
export default Number;
