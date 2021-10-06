import 'tailwindcss/tailwind.css';
// import '../styles/globals.css'
import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import useApollo from '@wiki/apollo/useApollo';
import { APOLLO_STATE_PROP_NAME } from '@wiki/apollo/initializeApollo';

const App = ({ Component, pageProps }: AppContext & AppInitialProps) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default App;
