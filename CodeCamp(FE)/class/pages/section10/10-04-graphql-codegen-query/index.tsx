import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`
export default function StaticRoutingMovedPage1() {
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD,{
    variables: {number:Number(router.query.qqq)}
  });
  
  console.log(data)
  return (
    <div>
      <div>{router.query.qqq}번 페이지 이동이 완료되었습니다.</div>
      <div>작성자는 {data?.fetchBoard?.writer}입니다.</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  ) 
}
