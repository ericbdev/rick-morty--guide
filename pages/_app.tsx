import 'tailwindcss/tailwind.css';
// import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@wiki/apollo';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Rick & Morty Wiki</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default App;
