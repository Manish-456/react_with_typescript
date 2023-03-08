import React, { ReactNode, useCallback, useState, useReducer, useTransition, useDeferredValue} from "react";

interface ChildrenTypes {
  children: (count: number) => ReactNode;
}


const Counter = ({ children }: ChildrenTypes) => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState<number>(0);
    const deprivedValue = useDeferredValue<number>(count)
  const [num, setNum] = useState<number[]>([]);
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);
  const updateSomething = () => {
      setCount(1);
      startTransition(() => {
        console.log(deprivedValue);
        
    const newArr : number[] = Array(2800).fill(1).map((_, i) => {
        return (2800 + count) - i
       })
       setNum(newArr);
 })
  }
  return (
    <>
      <h1>{children(count)}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{deprivedValue}</h1>
      <button onClick={updateSomething}>{count}</button>
      {isPending && "Loading Please wait..."}
      <ul>
        {num?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
};

export default Counter;
