import { useQuery, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  query {
    fetchProduct(productId: "ba5c023e-69d7-4891-8abb-4a607b80e2c0") {
      price
    }
  }
`;
export default function ClassQuizPage06_01() {
  const [나의함수] = useQuery(나의그래프큐엘셋팅);
  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };    
  return <button onClick={onClickSubmit}>GRAPHQL 연결하기</button>;
}   
