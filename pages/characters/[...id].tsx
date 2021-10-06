import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';

import { GET_CHARACTER } from '@wiki/gql/query/getCharacter';
import Card from '@wiki/components/Card';
import Text, { Richtext } from '@wiki/components/Text';

const Page = () => {
  const router = useRouter();

  const [getData, { loading, data }] = useLazyQuery(GET_CHARACTER);

  useEffect(() => {
    const id = [].concat(router?.query?.id).join('');

    if (isEmpty(id)) {
      return;
    }

    getData({
      variables: {
        id,
      },
    });
  }, [getData, router?.query?.id]);

  return (
    <section className="container p-0 mt-4 mx-auto">
      <Card>
        {loading && <Text className={['text-gray-800']}>Loading</Text>}
        <h1>{data?.character?.name}</h1>
        <Richtext>
          <ul>
            <li>{data?.character?.type}</li>
            <li></li>
            <li>{data?.character?.status}</li>
            <li>{data?.character?.gender}</li>
            <li>{data?.character?.species}</li>
          </ul>
        </Richtext>
      </Card>
    </section>
  );
};

export default Page;
