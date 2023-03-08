import Heading from "./Heading";
import SectionComp from "./SectionComp";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import List from "./List";

interface User {
  id: number;
  Username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    console.log(`Count is ${count}`);
    return () => console.log(`Cleanup for ${count}`);
  }, [count]);
  return (
    <>
      <Heading title="Testing" name="Typescript" />
      <SectionComp title="section component">Learning typescript</SectionComp>
      <Counter setCount={setCount}>
        <h3>Count is {count}</h3>
      </Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "👨‍💻 Code"]}
        render={(item: String) => {
          return <span>{item}</span>;
        }}
      />
    </>
  );
}

export default App;
