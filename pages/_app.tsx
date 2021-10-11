import 'tailwindcss/tailwind.css';
import { AppProps, AppContext } from 'next/app';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@wiki/apollo';

const App = ({ Component, pageProps }: AppProps & AppContext) => {
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
