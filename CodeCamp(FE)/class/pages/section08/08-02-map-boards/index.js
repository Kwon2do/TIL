import { useQuery, gql } from "@apollo/client";

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
export default function StaticRoutingMovedPage1() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards); //data.fetchBoards는 배열이기에, map 사용 가능

  /*원래 이렇게 변수에 담아놓고 style 값으로 줘야하는데 번거로우니 객체 자체를 작성해주는 것(중괄호 2개인 이유)
  const mystyles = {
    margin: "10px",
    padding: "0px"
  }
  */
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox"></input>
          </span>
          <span style={{margin:"10px"}}>{el.number}</span> 
          <span style={{margin:"10px"}}>{el.title}</span>
          <span style={{margin:"10px"}}>{el.writer}</span>
        </div>
      ))}
      {/*<div>1번 페이지 이동이 완료되었습니다.</div>
      <div>작성자는 {data?.fetchBoards.writer}입니다.</div>
      <div>제목: {data?.fetchBoards.title}</div>
      <div>내용: {data?.fetchBoards.contents}</div>*/}
    </div>
  );
}
