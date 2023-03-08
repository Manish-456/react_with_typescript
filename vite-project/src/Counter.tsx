import { ReactNode } from "react";

type Counterprops = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ children, setCount }: Counterprops) => {
  return (
    <>
  
    {children}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
