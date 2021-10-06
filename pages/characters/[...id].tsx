import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_CHARACTER } from '@wiki/gql/query/getCharacter';
import { Richtext } from '@wiki/components/Text';

const Page = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: [].concat(router?.query?.id).join(''),
    },
  });

  return (
    <Richtext>
      <ul>
        <li>{data?.character?.type}</li>
        <li>{data?.character?.name}</li>
        <li>{data?.character?.status}</li>
        <li>{data?.character?.gender}</li>
        <li>{data?.character?.species}</li>
      </ul>
    </Richtext>
  );
};

export default Page;
