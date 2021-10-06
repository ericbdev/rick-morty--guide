import { useMemo } from 'react';
import { initApollo, APOLLO_STATE_PROP_NAME } from './';

const useApollo = (initialState: any) => {
  const state = initialState[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initApollo(state), [state]);
  return store;
};

export default useApollo;
