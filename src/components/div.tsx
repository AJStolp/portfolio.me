interface IDiv {
  className?: string;
  children?: React.ReactNode;
}

const Div: React.FC<IDiv> = ({ className, children }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Div;
