import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number:45) {
      number
      writer
      title
      contents
    }
  }
`
export default function StaticRoutingMovedPage3() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data)
  return (
    <div>
      <div>3번 페이지 이동이 완료되었습니다.</div>
      <div>작성자는 {data?.fetchBoard.writer}입니다.</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </div>
  ) 
}
