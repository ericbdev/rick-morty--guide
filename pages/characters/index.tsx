import { useRouter } from 'next/router';
import Navigation from '@core/Navigation';

export default () => {
  const { asPath } = useRouter();
  return (
    <>
      <Navigation />
      <p>The {asPath} page</p>
    </>
  );
};
