import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;

  return (
    <>
      <Head>
        <title>Fake Store</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <Header />
        <main className="max-w-7xl mx-auto my-4 px-4">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
