import { InMemoryCache, defaultDataIdFromObject } from '@apollo/client';
import localForage from 'localforage';
import { persistCache, LocalForageWrapper } from 'apollo3-cache-persist';
import { StrictTypedTypePolicies } from '@wiki/codegen/apollo-helpers.generated';

const typePolicies: StrictTypedTypePolicies = {
  // Keys in this object will be validated against the types on your schema
  Episode: {
    keyFields: ['id', 'air_date'], // Values in this field will be validated against the available fields from the Product type
  },
  Character: {
    keyFields: ['id', 'name'],
  },
  Location: {
    keyFields: ['id'],
  },
  Episodes: {
    keyFields: ['results'],
  },
};

const cache = new InMemoryCache({
  typePolicies,
  dataIdFromObject(responseObject) {
    switch (responseObject.__typename) {
      case 'Location':
      case 'Character':
      case 'Episode':
        if (!responseObject?.id) {
          return null;
        }
        return `${responseObject.__typename}:${responseObject.id}`;
      case 'Episodes':
        console.log(responseObject);
        return null;
      default:
        return defaultDataIdFromObject(responseObject);
    }
  },
});

const createCache = () => {
  const makeCache = async () => {
    const storage = localForage.createInstance({
      name: 'wiki-cache',
      driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    });

    await persistCache({
      cache,
      key: 'wiki',
      debug: true,
      maxSize: false,
      storage: new LocalForageWrapper(storage),
    });
  };

  if (typeof window !== 'undefined') {
    makeCache();
  }

  return cache;
};

export default createCache;
