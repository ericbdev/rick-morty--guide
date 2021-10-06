import { useMemo } from 'react';
import initializeApollo, { APOLLO_STATE_PROP_NAME } from './initializeApollo';

const useApollo = (initialState: any) => {
  const state = initialState[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
};

export default useApollo;
