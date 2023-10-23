import Head from "next/head";
import Layout from "../components/layout";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Resume Builder</title>
        <meta
          name="description"
          content="Craft Your Professional Resume with Ease"
        />
      </Head>
      <Layout>
        <LoadingSpinner />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
