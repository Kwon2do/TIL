import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import type { MouseEvent } from "react";
import CommentItem from "../../../src/components/units/16-comment-item";
const FETCH_BOARDS = gql`
  query feytchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage1(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  //여러 index를 설정하기 위해
  const [myIndex, setmyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setmyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <CommentItem key={el._id} />
      ))}
    </div>
  );
}
