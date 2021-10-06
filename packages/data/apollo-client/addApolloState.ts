import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) => {
  if (pageProps?.props && typeof client?.cache?.extract === 'function') {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client?.cache?.extract();
  }

  return pageProps;
};

export default addApolloState;
