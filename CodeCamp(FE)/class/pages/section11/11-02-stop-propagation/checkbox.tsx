export default function Checkbox() {
    const qqq2 = () => {
        alert("2번클릭")
      }
      const qqq3 = (event:any) => {
        event.stopPropagation()
        alert("3번클릭")
      }
    return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3}></input>
    </span>
  );
}
