// import { makeExecutableSchema } from 'graphql-tools';
import { HttpLink } from '@apollo/client';
// import { SchemaLink } from '@apollo/client/link/schema';
// import typeDefs from '@wiki/codegen/schema-ast.generated.graphql';

const createIsomorphLink = () => {
  return new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  });

  // if (typeof window === 'undefined') {
  //   const schema = makeExecutableSchema({ typeDefs });
  //   return new SchemaLink({ schema });
  // } else {
  //   return new HttpLink({
  //     uri: 'https://rickandmortyapi.com/graphql',
  //   });
  // }
};

export default createIsomorphLink;
