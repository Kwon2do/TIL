import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });
  return (
    <ApolloProvider client={client}>
      <div>⭐_app.js 컴포넌트 시작 부분⭐</div>
      <Layout>
        <Component />
      </Layout>
      <div>⭐_app.js 컴포넌트 마지막 부분⭐</div>
    </ApolloProvider>
  );
}
