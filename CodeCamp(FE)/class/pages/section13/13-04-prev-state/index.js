import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  function onClickCountUp() {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    //임시 저장 공간에 들어있는 state값을 수정(이렇게하면 5씩 증가)
    setCount((prev) => {
      prev + 1;
    });
    setCount((prev) => {
      prev + 1;
    });
    setCount((prev) => {
      prev + 1;
    });
    setCount((prev) => {
      prev + 1;
    });
    setCount((prev) => {
      prev + 1;
    });
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
