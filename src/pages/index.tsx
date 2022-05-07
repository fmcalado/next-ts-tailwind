import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold">
        Hello World
      </div>
    </div>
  );
};

export default Home;
