import { useQuery, gql, useMutation } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

//변수를 입력받을 땐,타입도 적어줘야 함
const DELETE_BOARD = gql`
  mutation deleteBoard($number : Int){
    deleteBoard(number: $number){
        message
    }
  }
`
export default function StaticRoutingMovedPage1() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoards); //data.fetchBoards는 배열이기에, map 사용 가능

  /*원래 이렇게 변수에 담아놓고 style 값으로 줘야하는데 번거로우니 객체 자체를 작성해주는 것(중괄호 2개인 이유)
  const mystyles = {
    margin: "10px",
    padding: "0px"
  }
  */
  const onClickDelete = (event) => {
    deleteBoard({
      variables: {number: Number(event.target.id)},
      refetchQueries:[{query:FETCH_BOARDS}]
    });
  }
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        //특별한 이유가 없으면 Fragment(<>)로 감싸자! <div />는 1개 더 그려야돼서 조금 느려짐
        //1.Fragment란, <></>, <Fragment></Fragment>
        //2.Fragment에 key입력하는 방법? <Fragment key={1}></Fragment>
        <Fragment key={el.number}> 
        {/*index는 게시물을 삭제할 때, 다음 게시물이 올라오면서 기존 index와 동일한 값을 갖게 됨. 
        즉, 유일하지 않음*/}
          <span>
            <input type="checkbox"></input>
          </span>
          <span style={{margin:"10px"}}>{el.number}</span> 
          <span style={{margin:"10px"}}>{el.title}</span>
          <span style={{margin:"10px"}}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>삭제</button>
          </span>
          </Fragment>
      ))}
      {/*<div>1번 페이지 이동이 완료되었습니다.</div>
      <div>작성자는 {data?.fetchBoards.writer}입니다.</div>
      <div>제목: {data?.fetchBoards.title}</div>
      <div>내용: {data?.fetchBoards.contents}</div>*/}
    </div>
  );
}
