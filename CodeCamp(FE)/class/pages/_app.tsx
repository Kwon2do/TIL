import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globalStyles";
export default function App({ Component }: AppProps) {
  return (
    <div>
      <div>⭐_app.js 컴포넌트 시작 부분⭐</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>⭐_app.js 컴포넌트 마지막 부분⭐</div>
    </div>
  );
}
