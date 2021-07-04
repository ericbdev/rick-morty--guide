import { useRouter } from 'next/router';
import Navigation from '@components/';

export default () => {
  const { asPath } = useRouter();
  return (
    <>
      <Navigation />
      <p>The {asPath} page</p>
    </>
  );
};
