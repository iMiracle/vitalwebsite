'use client';

import {useEffect} from 'react';
import ErrorLayoutPage from '@/components/ErrorLayoutPage';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {

  useEffect(() => {
    console.error("ERROR Page: " + error);
  }, [error]);

  return (
    <ErrorLayoutPage/>
  );
}
