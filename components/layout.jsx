import Head from "next/head";

function Layout({ children, title, description }) {
  return (
    <main className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </main>
  );
}

export default Layout;
