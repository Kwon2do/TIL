import Example from "../../../src/components/units/14-props-children-example";
export default function PropsChildrenPage(): JSX.Element {
  return (
    <Example school="땡떙초등학교">
      {/* 쏙 들어가기! 땡겨오기! */}
      <div>
        <input type="text" />
        <div>저는 철수입니다</div>
        <button>클릭해주세요!</button>
      </div>
    </Example>
  );
}
