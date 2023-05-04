import Home from '@app/components/Home';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip Calculator app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
