import { ApolloClient, gql } from '@apollo/client';
import schema from '@wiki/codegen/schema-ast.generated.graphql';
import createCache from './createCache';
import createIsomorphLink from './createIsomorphLink';

const createApolloClient = () => {
  const typeDefs = gql`
    ${schema}
  `;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: createCache(),
    typeDefs,
    queryDeduplication: false,
    connectToDevTools: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
};

export default createApolloClient;
