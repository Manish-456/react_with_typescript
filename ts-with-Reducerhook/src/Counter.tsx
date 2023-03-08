import React, {
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

const bigArr = [...Array(10000).keys()];

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<number[]>(bigArr);
  const [isPending, startTransition] = useTransition();
  const defferedInput: string = useDeferredValue(inputValue);

  useEffect(() => {
    startTransition(() => {
      console.log(defferedInput);
      const filtered = bigArr.filter((item) =>
        item.toString().includes(defferedInput)
      );
      setList(filtered);
    });
  }, [defferedInput]);

  return (
    <div>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
      Search result for {defferedInput}
      <ul>
        {isPending && "Loading please wait"}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
