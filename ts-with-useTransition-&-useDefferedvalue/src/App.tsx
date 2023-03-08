import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
} from "react";

interface User {
  id: number;
  username: string;
}
type Fibo = (item: number) => number;

const fibo: Fibo = (item) => {
  if (item < 1) {
    return 1;
  }
  return fibo(item - 1) + fibo(item - 2);
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>([]);

  useEffect(() => {
    console.log("Component mount");
    return () => console.log("Component unmount");
  }, [count]);
  const inpRef = useRef<HTMLInputElement | null> (null);
  const memo = useMemo<number>(() => fibo(5), []);

  console.log(inpRef?.current);

  const AddTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement | KeyboardEvent>) => {
      setCount((prev) => prev + 1);
      console.log(inpRef?.current?.value);
    },
    []
  );

  return (
    <>
      <h1>TYPESCRIPT WITH REACT HOOKS</h1>
      <h3> {count}</h3>
      <input type="text" ref={inpRef} />

      <h2>{memo}</h2>
      <button onClick={AddTwo}>Add Two</button>
    </>
  );
}

export default App;
