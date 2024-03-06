import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";
export default function CounterLetDocumentPage(): JSX.Element {
  //let count = 0 //let은 리액트전용html(JSX)에서 변경을 감지하지 못함.(따라서, state를 사용해야함.)
  const [count, setCount] = useState(0);

  const onClickCount = (): void => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>============</div>
      <Child2 count={count} onClickCount={onClickCount} />
    </>
  );
}
