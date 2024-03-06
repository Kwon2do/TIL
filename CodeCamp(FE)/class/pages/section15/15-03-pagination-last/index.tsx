import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage1(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  //여기서 받아오는 data는 dataBoardsCount로 구분
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  console.log(dataBoardsCount?.fetchBoardsCount);
  //10개씩이니까 총 게시물 수에서 10을 나눔(만약 안불러와졌으면 그냥 1페이지 반영)
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  console.log(data?.fetchBoards);
  const [startPage, setStartPage] = useState(1);
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPrevPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage - 10);
      void refetch({ page: startPage - 10 });
    }
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 === lastPage) {
      alert("마지막 페이지입니다.");
      return;
    }
    setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ cursor: "pointer", padding: "0px 10px" }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음 페이지</span>

      {/* {[1, 1, 1, 1, 1].map((_, index) => (
        <span key={index+1} id={String(index+1)} onClick={onClickPage}>
          {index+1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}></span>
      <span id="2" onClick={onClickPage}></span>
      <span id="3" onClick={onClickPage}></span> */}
    </div>
  );
}
