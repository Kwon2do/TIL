import { RedInput, BlueButton } from "../09-write2/BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />
      제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} />
      내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} isActive={props.isActive}>{props.isEdit?"수정하기" : "등록하기"}</BlueButton>
    </div>
  );
}
