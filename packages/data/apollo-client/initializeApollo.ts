// TODO: types ala https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js
// https://github.com/kellenmace/apollo-client-cache-rehydration-in-next-js
import { NormalizedCacheObject } from '@apollo/client';
import createApolloClient from './utils/createApolloClient';
import merge from 'deepmerge';
import { isEqual } from 'lodash';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;
const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
) => {
  const _apolloClient = apolloClient ?? createApolloClient(initialState);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (
    initialState &&
    _apolloClient &&
    typeof _apolloClient?.extract === 'function'
  ) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient?.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) {
  if (pageProps?.props && typeof client?.cache?.extract === 'function') {
    console.log(pageProps);
    pageProps.props[APOLLO_STATE_PROP_NAME] = client?.cache?.extract();
  }

  return pageProps;
}

export default initializeApollo;
