import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/10-write2/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
export default function GraphqlMutationPage() {
  const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
      fetchBoard(number: $number) {
        number
        writer
        title
        contents
      }
    }
  `;
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  return (
    <BoardWrite
      isEdit={true}
      data={data}
    />
  );
}
